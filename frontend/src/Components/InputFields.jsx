//här ska vi lägga in label och input
//samt skapa en lista med vad som ska stå på labels
import React from "react";
import { useState } from "react";

//hoppa över input img,

export default function InputFields(prop) {
  const [formLabel] = useState([
    ["name", "Mitt namn är "],
    ["nickname", "Jag kallas även "],
    ["birthday", "Min födelsedag är den "],
    ["zodiacSign", "Mitt stjärntecken är "],
    ["hairColor", "Hårfärg: "],
    ["eyeColor", "Ögonfärg: "],
    ["animalBreed", "Jag är "],
    ["happy", "Jag blir glad när "],
    ["sad", "Jag blir arg när "],
    ["interests", "Mina intressen är "],
    ["favoriteFood", "Favoritmat: "],
    ["favoriteAnimal", "Favoritdjur: "],
    ["myIdol", "Min stora idol är "],
    ["apsirations", "Min dröm är att bli "],
  ]);

  let foundLabel = formLabel.find((el) => el[0] === prop.list[0]);

  if (prop.list[0] !== "img") {
    return (
      <section>
        <label htmlFor={prop.list[0]}>{foundLabel[1]}</label>
        <input
          className={prop.list[0]}
          autoComplete="off"
          type="text"
          id={prop.list[0]}
          name={prop.list[0]}
          onChange={(e) => prop.handleInputChange(e.target, prop.list)}
        />
      </section>
    );
  }
}
