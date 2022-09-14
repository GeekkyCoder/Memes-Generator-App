import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1ur9b0.jpg",
  });

  const [memeArray, setMemeArray] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevText) => {
      return { ...prevText, [name]: value };
    });
  };

  const handleClick = () => {
    let index = Math.floor(Math.random() * memeArray.length);
    let randomImageUrl = memeArray[index].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        topText: "",
        bottomText: "",
        randomImage: randomImageUrl,
      };
    });
  };

  useEffect(() => {
    async function getMemeData() {
      let response = await fetch("https://api.imgflip.com/get_memes");
      let data = await response.json();
      setMemeArray(data.data.memes);
      setMeme((prevMeme) => {
        return { ...prevMeme, randomImage: data.data.memes[1].url };
      });
    }
    getMemeData();
  }, []);
  return (
    <div className="app">
      <Header />
      <Hero
        topText={meme.topText}
        bottomText={meme.bottomText}
        handleChange={handleChange}
        randomImage={meme.randomImage}
        handleClick={handleClick}
      />
      <Footer />
    </div>
  );
}

export default App;
