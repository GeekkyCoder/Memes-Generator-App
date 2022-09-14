import React from "react";
import trollPng from "../images/Troll-Face.png";

export default function Header() {
  return (
    <header className="Header">
      <div className="logo">
        <div className="img-container">
          <img src={trollPng} alt="#" />
        </div>
        <h1>Memes Generator</h1>
      </div>
      <div className="credit">
        <h4>Made By Faraz</h4>
      </div>
    </header>
  );
}
