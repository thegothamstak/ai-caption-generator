// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import CaptionGenerator from './components/CaptionGenerator';

const App = () => {
  const API_HOST = process.env.REACT_APP_API_HOST

  // State management
  const [image, setImage] = useState(null);
  const [tone, setTone] = useState('funny');
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle image file change
  const handleImageChange = (file) => {
    setImage(file);
  };

  // Handle tone change
  const handleToneChange = (newTone) => {
    setTone(newTone);
  };

  // Handle API call to generate the caption
  const handleGenerateCaption = async () => {
    if (!image) {
      alert('Please upload an image first!');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('image', image);
    formData.append('tone', tone);

    try {
      const response = await axios.post(`${API_HOST}/generate-caption`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data)
      setCaption(response.data.caption); // Update the caption state
    } catch (error) {
      console.error('Error generating caption:', error);
      setCaption('Failed to generate caption.');
    } finally {
      setLoading(false); // Set loading to false when done
    }
  };

  //  To reset the selection
  const onReset = () => {
    setImage(null)
    setCaption('')
  }

  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <ImageUploader onImageChange={handleImageChange} onToneChange={handleToneChange} onReset={onReset} tone={tone} />
        <button
          onClick={handleGenerateCaption}
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          disabled={loading}>
          {loading ? 'Generating...' : 'Generate Caption'}
        </button>
        <CaptionGenerator caption={caption} />
      </main>
    </div>
  );
};

export default App;
