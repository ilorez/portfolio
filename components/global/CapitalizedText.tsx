import { cn } from '@/lib/utils';
import React from 'react';

const CapitalizedText = ({
  text,
  light_color,
  cap_color
}: {
  text: string;
  light_color: string;
  cap_color: string;
}) => {
  const words = text.split(' ');
  const capitalizedWords = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const restOfWord = word.slice(1);
    return (
      <span
        key={word}
        className={cn(' font-bold text-lg', light_color)}
      >
        <span className={cn('text-primary font-bold', cap_color)}>
          {firstLetter}
        </span>
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
