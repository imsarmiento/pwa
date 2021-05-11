import React, { useState } from "react";
import { useEffect } from "react";

function Joke(props) {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    if (!navigator.onLine) {
      let charact = localStorage.getItem("characters");
      if (charact === null) {
        setCharacters(null);
      } else {
        setCharacters(JSON.parse(localStorage.getItem("characters")));
      }
      return;
    }

    fetch(
      "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=ad815d2283155ffa6459bf9a9d1b1cde&hash=f7f45adb5050f28864a73a5716ceadea"
    )
      .then((result) => result.json())
      .then((result) => {
        let char = result.data.results;
        setCharacters(char);
        console.log("Characters", char);
        localStorage.setItem("characters", JSON.stringify(char));
      });
  }, []);

  if (characters !== null) {
    return (
      <div>
        <h1>Marverl Characters</h1>
        {characters.map((value, index) => {
          console.log("entra1");
          return (
            <>
              <li key={index}>
                {value.name} {`(${value.id})`}
              </li>
              <img
                src={value.thumbnail.path + "." + value.thumbnail.extension}
                alt={`${value.name}_img`}
              />
            </>
          );
        })}
      </div>
    );
  } else {
    console.log("entra2");
    return (
      <div>
        <p>Loading... (Check your connection)</p>
      </div>
    );
  }
}

export default Joke;
