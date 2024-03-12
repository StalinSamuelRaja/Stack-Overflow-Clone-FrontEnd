import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['developer', 'mobile developer', 'game developer', 'data scientist','system admin'];

export default function TextAnime() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className="font-extrabold mt-0  text-orange-600 text-4xl text-center md:text-left text-4xl md:text-5xl">
      <TextTransition springConfig={presets.gentle}>{TEXTS[index % TEXTS.length]}</TextTransition>
    </h1>
  );
};
