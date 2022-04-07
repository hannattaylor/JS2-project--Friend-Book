import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFriend } from "../actions/friendAction";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./NewFriend.module.css";
import PrevInput from "../Components/PrevInput";

export default function EditFriend() {
  const location = useLocation();
  const prevForm = location.state;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [friendForm, setFriendForm] = useState(prevForm);

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
      setFriendForm(friendInput);
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
            <PrevInput
              key={i}
              list={list}
              handleInputChange={handleInputChange}
              prevInput={prevForm}
            />
          ))}

          <Link to="/tableoffriends">
            <button
              className={styles.sendBtn}
              onClick={() => dispatch(updateFriend(obj))}
            >
              Uppdatera vän
            </button>
          </Link>
        </section>
      </div>
    </main>
  );
}
