import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFriend } from "../actions/friendAction";
import { Link, useNavigate } from "react-router-dom";
import InputFields from "../Components/InputFields";
import styles from "./NewFriend.module.css";

export default function NewFriend() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [friendForm, setFriendForm] = useState([
    ["img", ""],
    ["date", ""],
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
    ["aspirations", ""],
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

  function required() {
    let empty = friendForm.includes();
    console.log(empty);

    if (empty) {
      console.log("det saknas data");
    } else {
      console.log("allt är ifyllt");
      dispatch(addFriend(obj));
      navigate("/tableoffriends");
    }
    // friendForm.map((input) => {
    //   if (input[1] === "") {
    //     console.log("Det saknas data");
    //   } else {
    //     dispatch(addFriend(obj));
    //     navigate("/tableoffriends");
    //   }
    // });

    //navigate to /tableoffriends
  }
  //göra en funktion så att när ett value är tomt blir det auto "ingen kommentar"
  return (
    <main className={styles.main}>
      <div className={styles.bookWrap}>
        <section className={styles.formWrap}>
          <section className={styles.frame}>
            <img
              className={styles.imgPreview}
              id="file-preview"
              src=""
              alt=""
            />
          </section>
          <input
            className={styles.fileInput}
            type="file"
            accept="image/*"
            onChange={(e) => addImage(e)}
          />
          {friendForm.map((list, i) => (
            <InputFields
              key={i}
              list={list}
              handleInputChange={handleInputChange}
            />
          ))}
          <button className={styles.sendBtn} onClick={() => required()}>
            Lägg till vän
          </button>
        </section>
      </div>
    </main>
  );
}
