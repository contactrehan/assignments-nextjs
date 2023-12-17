"use client"


import { useState } from 'react';

const namesList = ['Rehan', 'Ali', 'Zuhaib', 'Talha', 'Zaman', "Khusar","Naseema","Billu"];

const Next_button = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentName = namesList[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % namesList.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? namesList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
     <p className="text-xl mb-4 text-black font-semibold leading-tight">
  Current Name: {currentName}
</p>

      <button
  className={`button bg-red-500 text-white px-4 py-2 mr-2 rounded styles.button`}
  onClick={handlePrevious}
>
  Previous
</button>
<button
  className={`button bg-green-500 text-white px-4 py-2 rounded styles.button`}
  onClick={handleNext}
>
  Next
</button>
    </div>
  );
};

export default Next_button;
