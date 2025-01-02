const express = require('express');
const multer = require('multer');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require('dotenv');
const fs = require('fs');
const cors = require('cors');

dotenv.config();  // Load environment variables from the .env file

const app = express();
const port = process.env.PORT || 5000;

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for CORS
app.use(cors());

// Set up Multer storage for file uploads
const storage = multer.memoryStorage();  // Store file in memory
const upload = multer({ storage: storage });

// API route for image upload and caption generation
app.post('/generate-caption', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No image uploaded");
  }

  const image = req.file.buffer;  // Image file as buffer
  const { tone } = req.body;      // Caption tone (funny, flirty, etc.)

  try {
    // Call the Gemini API to generate a caption
    const aiCaption = await generateCaption(image, tone);
    res.json({ caption: aiCaption });  // Return the generated caption
  } catch (error) {
    console.error('Error generating caption:', error);
    res.status(500).send("Error generating caption");
  }
});

// Simple health check route
app.get('/', (req, res) => {
  res.send('Server is up and running');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Function to generate caption using Google Gemini API
async function generateCaption(imageBuffer, tone) {
  try {
    // Load the Gemini Pro Vision model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Prepare the image data
    const imageData = {
      inlineData: {
        data: imageBuffer.toString('base64'),
        mimeType: "image/jpeg"
      }
    };

    // Generate content using Gemini
    const result = await model.generateContent([
      `Generate a ${tone} caption for this image:`,
      imageData
    ]);

    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API error:', error);
    throw new Error('Error generating caption');
  }
}

