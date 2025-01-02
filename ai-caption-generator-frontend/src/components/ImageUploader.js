import React, {useState, useRef} from 'react';

const ImageUploader = ({ onImageChange, onToneChange, onReset, tone }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const imageInputRef = useRef(null)

  const onPreviewImage = (event) => {
    const file = event.target.files[0]

    if (file) {
      // Create a preview URL for the image file
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);

      onImageChange(file)
    }
  }

  const onResetClicked = () => {
    setImagePreview(null)

    if (imageInputRef.current) {
      imageInputRef.current.value = ''
    }

    onReset()
  }
  
  return (
    <div className="my-4">
      {/* Image upload */}
      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        onChange={(e) => onPreviewImage(e)}
        className="block w-full mt-4 p-2 border border-gray-300 rounded-md cursor-pointer" />

      {/* Show the reset button if an image is selected */}
      {imagePreview && (
        <div className="image-preview-container">
          <button
            onClick={onResetClicked}
            className="reset-button mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >Reset</button>
        </div>
      )}

      {/* Show the image preview if an image is selected */}
      {imagePreview && (
        <div className="image-preview-container">
          <img
            src={imagePreview}
            alt="Image Preview"
            className="image-preview max-w-[300px] max-h-[300px] object-contain rounded-md shadow-lg mt-5" />
        </div>
      )}

      {/* Tone selection dropdown */}
      <div className="mt-6">
        <h3 className="text-xl font-medium">Select Caption Tone:</h3>
        <select
          className="w-full mt-2 p-2 border border-gray-300 rounded-md"
          value={tone}
          onChange={(e) => onToneChange(e.target.value)} >
          <option value="funny">Funny</option>
          <option value="witty">Witty</option>
          <option value="flirty">Flirty</option>
          <option value="inspirational">Inspirational</option>
          <option value="sarcastic">Sarcastic</option>
        </select>
      </div>
    </div>
  );
};

export default ImageUploader;
