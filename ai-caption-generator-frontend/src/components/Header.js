import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-blue-600 text-white py-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold">AI Caption Generator</h1>
        <p className="mt-2 text-sm sm:text-base">Generate captions for your images with a unique tone!</p>
      </div>
    </header>
  );
};

export default Header;
