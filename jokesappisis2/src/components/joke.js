import React, { useState } from "react";
import { useEffect } from "react";

function Joke(props) {
  const [joke, setJoke] = useState();
  const [characters, setCharacters] = useState();

  useEffect(() => {
    if (!navigator.onLine) {
      let jokeact = localStorage.getItem("joke");
      if (jokeact === null) {
        setJoke("Loading ...");
      } else {
        setJoke(localStorage.getItem("joke"));
      }
    }

    fetch(
      "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=ad815d2283155ffa6459bf9a9d1b1cde&hash=f7f45adb5050f28864a73a5716ceadea"
    )
      .then((result) => result.json())
      .then((result) => {
        localStorage.setItem("joke", result.value);
        setJoke("hola");
        console.log("Result", result);
      });
  }, []);

  return (
    <div>
      <h1>Joke</h1>
      <p>{joke}</p>
    </div>
  );
}

export default Joke;
