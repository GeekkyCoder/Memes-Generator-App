import React from "react";
import Meme from "./Meme";

export default function Hero(props) {
  console.log(props.topText);
  return (
    <main>
      <section className="hero wrapper">
        <input
          className="top--text"
          type="text"
          name="topText"
          id="topText"
          placeholder="Top Text"
          onChange={(e) => props.handleChange(e)}
        />
        <input
          className="bottom--text"
          type="text"
          name="bottomText"
          id="bottomText"
          placeholder="bottom text"
          onChange={(e) => props.handleChange(e)}
        />
      </section>
      <div className="wrapper">
        <button className="btn" onClick={props.handleClick}>
          get a new meme
        </button>
      </div>

      <Meme
        topText={props.topText}
        bottomText={props.bottomText}
        randomImage={props.randomImage}
      />
    </main>
  );
}
