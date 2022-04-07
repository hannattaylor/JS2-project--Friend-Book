import React from "react";
import { useState } from "react";
import styles from "./InputFields.module.css";

export default function InputFields(prop) {
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
        />
      </article>
    );
  }
}
