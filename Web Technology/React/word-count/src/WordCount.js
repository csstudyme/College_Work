import React, { useState } from 'react';

const WordCount = () => {
  const [wordCount, setWordCount] = useState(0);

  const handleKeyUp = (e) => {
    const words = e.target.value.trim().split(/\s+/);
    setWordCount(words[0] === "" ? 0 : words.length);
  };

  return (
    <div>
      <textarea
        onKeyUp={handleKeyUp}
        placeholder="Type your text here..."
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCount;
