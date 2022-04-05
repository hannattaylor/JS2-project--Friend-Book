import React from "react";
import { useState } from "react";

export default function OutputFields(props) {
  console.log(props);

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
    ["aspirations", "Min dröm är att bli "],
  ]);

  const foundLabel = formLabel.find((el) => el[0] === props.item[0]);
  console.log(foundLabel);

  if (props.item[0] !== "img") {
    return (
      <article style={{ display: "flex", gap: "1rem" }}>
        <h3>{foundLabel[1]}</h3>
        <h5>{props.item[1]}</h5>
      </article>
    );
  }
}
