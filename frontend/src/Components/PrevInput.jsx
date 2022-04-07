//här ska vi lägga in label och input
//samt skapa en lista med vad som ska stå på labels
import React from "react";
import { useState } from "react";
import styles from "./InputFields.module.css";

//hoppa över input img,

export default function PrevInput(prop) {
  const prevInput = prop.prevInput;

  const [formLabel] = useState([
    ["name", "Mitt namn är "],
    ["date", "Dagens datum "],
    ["nickname", "Smeknamn "],
    ["birthday", "Min födelsedag är den "],
    ["zodiacSign", "Stjärntecken "],
    ["hairColor", "Hårfärg: "],
    ["eyeColor", "Ögonfärg: "],
    ["animalBreed", "Djurras "],
    ["happy", "Gör mig glad "],
    ["sad", "Gör mig arg "],
    ["interests", "Mina intressen "],
    ["favoriteFood", "Favoritmat: "],
    ["favoriteAnimal", "Favoritdjur: "],
    ["myIdol", "Min stora idol"],
    ["aspirations", "En stor dröm är "],
  ]);

  let foundLabel = formLabel.find((el) => el[0] === prop.list[0]);
  let foundPrevInput = prevInput.find((el) => el[0] === prop.list[0]);

  if (prop.list[0] !== "img") {
    return (
      <article className={styles[prop.list[0]]}>
        <label className={styles.label} htmlFor={prop.list[0]}>
          {foundLabel[1]}
        </label>
        <input
          className={styles.input}
          autoComplete="off"
          type="text"
          id={prop.list[0]}
          name={prop.list[0]}
          onChange={(e) => prop.handleInputChange(e.target, prop.list)}
          defaultValue={foundPrevInput[1]}
        />
      </article>
    );
  }
}
