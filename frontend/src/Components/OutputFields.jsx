import React from "react";
import { useState } from "react";
import styles from "./OutputFields.module.css";

export default function OutputFields(props) {
  let prop = props.item[0];

  const [formLabel] = useState([
    ["name", "Mitt namn är "],
    ["date", "Dagens datum "],
    ["nickname", "Smeknamn "],
    ["birthday", "Min födelsedag är den "],
    ["zodiacSign", "Stjärntecken "],
    ["hairColor", "Hårfärg: "],
    ["eyeColor", "Ögonfärg: "],
    ["animalBreed", "Jag är (vilket djur) "],
    ["happy", "Det bästa jag vet "],
    ["sad", "Det värsta jag vet "],
    ["interests", "Mina intressen "],
    ["favoriteFood", "Favoritmat: "],
    ["favoriteAnimal", "Favoritdjur: "],
    ["myIdol", "Min stora idol är "],
    ["aspirations", "Jag vill bli "],
  ]);

  const foundLabel = formLabel.find((el) => el[0] === props.item[0]);

  if (props.item[0] !== "img") {
    return (
      <article className={styles[prop]}>
        <h3 className={styles.label}>{foundLabel[1]}</h3>
        <h5 className={styles.answer}>{props.item[1]}</h5>
      </article>
    );
  }
}
