import React from "react";
import { useState } from "react";

export default function FriendCard(props) {
  let friend = props.friend;
  let index = props.index;
  console.log(friend[index]);

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
  return (
    <div>
      <h5>{friend[index].name}</h5>
      <img />
      <button onClick={() => props.handleRemoveFriend(friend[index])}>
        Ta bort vän
      </button>
    </div>
  );
}
