import React from 'react';

const CaptionGenerator = ({ caption }) => {
  return (
    <div className="mt-6 text-center">
      {caption && (
        <>
          <h3 className="text-xl font-semibold">Generated Caption:</h3>
          <p className="text-lg text-gray-700 mt-2">{caption}</p>
        </>
      )}
    </div>
  );
};

export default CaptionGenerator;

