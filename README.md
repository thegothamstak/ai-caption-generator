# AI Caption Generator

## Project Overview

AI Caption Generator is a fun and interactive web application that generates unique captions for images based on user-selected tones and moods. Users can upload an image, choose a tone or mood (like funny, serious, flirty, etc.), and the application will generate a caption that matches the selected style. The app is designed to help users find creative captions for their social media posts, photo albums, or any other image-based projects.

The app uses **Google Gemini-1.5-Flash** for generating AI-powered captions. By making it easier for users to select the right tone and context for their images, we aim to enhance the process of captioning while ensuring the process remains fun and user-friendly.

## Features
- **Image Upload**: Allows users to upload an image to generate captions.
- **Tone Selection**: Users can select a tone or mood for their captions (e.g., funny, romantic, sarcastic).
- **Image Preview**: Displays a preview of the uploaded image before generating the caption.
- **Reset Functionality**: Users can reset the image selection and tone settings to start over.
- **AI-Powered Caption Generation**: Generates captions based on the selected tone and context of the image using **Google Gemini-1.5-Flash**.
- **Mobile-Friendly**: The app is designed to be responsive and accessible on all devices.

## Tech Stack

### Frontend
- **React.js**: A JavaScript library for building user interfaces. It is used to create interactive and dynamic components in the app.
- **Tailwind CSS**: A utility-first CSS framework used for styling the frontend. It allows for rapid styling with responsive design.
- **React Hooks**: For managing component state and side effects.
- **Axios**: For making HTTP requests to the backend.
- **dotenv**: For managing environment variables securely.

### Backend
- **Node.js**: A JavaScript runtime environment for the backend, enabling server-side code execution.
- **Express.js**: A web framework for Node.js used to create APIs for image processing and caption generation.
- **Google Gemini-1.5-Flash API**: Used for generating AI-based captions based on the uploaded image and selected tone.
- **dotenv**: Used to securely manage environment variables, including API keys, for both the frontend and backend.

## AI and APIs

### **Google Gemini-1.5-Flash API**
- The **Google Gemini-1.5-Flash** model is used to generate creative captions based on the selected tone and context of the image. Gemini-1.5-Flash is part of Google’s generative AI tools, which allow for fast, context-aware text generation that matches the mood and style chosen by the user. It takes both the image’s content and the tone preferences into account when crafting captions.

## Project Setup

### Prerequisites
- **Node.js**: Ensure that you have Node.js installed on your system. You can download it from [here](https://nodejs.org/).
- **npm** (Node Package Manager) is typically installed along with Node.js and is used to manage dependencies.
- **Google Gemini-1.5-Flash API Key**: You will need an API key from Google’s Generative AI tools. You can obtain your API key from the [Google Cloud Console](https://console.cloud.google.com/).

### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-caption-generator.git
   cd ai-caption-generator
2. Navigate to the frontend folder:
   ```bash
   cd frontend
3. Install the required dependencies:
   ```bash
   npm install
4. Set up environment variables for the frontend:
   Create a .env file in the frontend directory.
   Add your backend API host URL in the .env file:
   ```bash
   REACT_APP_API_HOST=http://localhost:5000
5. Run the frontend development server:
   ```bash
   npm start
The app will be available at http://localhost:3000.

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
2. Install the required dependencies:
   ```bash
   npm install
3. Set up environment variables for the backend:
   Create a .env file in the backend directory.
   Add the Gemini-1.5-Flash API Key and PORT in the .env file:
   ```bash
   GEMINI_API_KEY=your-gemini-api-key
   PORT=5000
4. Run the backend server:
   ```bash
   node server.js
The backend will be available at http://localhost:5000.



## Future Updates & Features. We have a few exciting features planned for future updates:

- **Improved AI Integration:** We aim to enhance the AI's understanding of the image context by using more advanced image recognition models and additional custom fine-tuning.
- **Expanded Tone Options:** Users will have access to even more tone options, allowing them to choose specific moods, such as "Empowering," "Mysterious," or "Funny with a twist."
- **Social Media Integration:** Allow users to directly share the generated captions along with their images on popular social media platforms like Instagram, Twitter, and Facebook.
- **User Profiles and Saved Captions:** Users will be able to save their favorite captions or generate captions in bulk for multiple images. They could even create user profiles to store these captions for future use.
- **Tone Personalization:** Offer personalized tone suggestions based on the user’s past selections or the type of images they typically upload.
