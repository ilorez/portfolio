import React from 'react';

const CapitalizedText = ({ text }: { text: string }) => {
  const words = text.split(' ');
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return (
      <span key={word} className='text-light-primary font-bold text-lg'>
        <span className="text-primary font-bold">{firstLetter}</span>
        {restOfWord}
      </span>
    );
  });

  return (
    <div>
      {capitalizedWords.map((word, index) => (
        <span key={index}>{word} </span>
      ))}
    </div>
  );
};

export default CapitalizedText;
