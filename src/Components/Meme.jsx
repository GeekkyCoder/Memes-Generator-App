import React from "react";

export default function Meme(props) {
  let { topText, bottomText, randomImage } = props;
  return (
    <section className="wrapper meme-section">
      <p className="top-para">{topText}</p>
      <img className="hero--meme" src={randomImage} alt="#" />
      <p className="bottom-para">{bottomText}</p>
    </section>
  );
}
