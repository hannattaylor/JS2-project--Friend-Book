import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFriend } from "../actions/friendAction";
import { Link } from "react-router-dom";
import InputFields from "../Components/InputFields";

export default function NewFriend() {
  const dispatch = useDispatch();

  const [friendForm, setFriendForm] = useState([
    ["img", ""],
    ["name", ""],
    ["nickname", ""],
    ["birthday", ""],
    ["zodiacSign", ""],
    ["hairColor", ""],
    ["eyeColor", ""],
    ["animalBreed", ""],
    ["happy", ""],
    ["sad", ""],
    ["interests", ""],
    ["favoriteFood", ""],
    ["favoriteAnimal", ""],
    ["myIdol", ""],
    ["apsirations", ""],
  ]);

  function handleInputChange(input, prop) {
    let friendInput = [...friendForm];
    let found = friendInput.find((el) => el[0] === prop[0]);
    found[1] = input.value;
    setFriendForm(friendInput);
  }

  function addImage(e) {
    if (e.target.files.length > 0) {
      let src = URL.createObjectURL(e.target.files[0]);
      let friendInput = [...friendForm];
      let foundImg = friendInput.find((el) => el[0] === "img");
      foundImg[1] = src;
      showPreview(src);
    }
  }

  function showPreview(src) {
    let preview = document.getElementById("file-preview");
    preview.src = src;
  }

  const obj = Object.fromEntries(friendForm);
  console.log(obj);

  return (
    <main>
      <h1>Lägg till vän</h1>
      <section>
        <img style={{ width: "20rem" }} id="file-preview" src="" alt="" />
      </section>
      <input type="file" accept="image/*" onChange={(e) => addImage(e)} />
      {friendForm.map((list, i) => (
        <InputFields
          key={i}
          list={list}
          handleInputChange={handleInputChange}
        />
      ))}
      <Link to="/friends">
        <button onClick={() => dispatch(addFriend(obj))}>Skicka in</button>
      </Link>
    </main>
  );
}
