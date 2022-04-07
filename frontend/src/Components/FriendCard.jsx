import React from "react";
import OutputFields from "./OutputFields";
import { useSelector } from "react-redux";
import styles from "./FriendCard.module.css";
import { Link } from "react-router-dom";

export default function FriendCard(props) {
  const state = useSelector((state) => {
    return state.friendList;
  });

  const page = props.page;

  const friendList = Object.entries(state[page]); //gör om obejct till array för att kunna loopa över

  function lightbox() {
    document.getElementById("lightbox").style.display = "block";
  }

  function handleRemove() {
    props.handleRemoveFriend(state[page]);
    document.getElementById("lightbox").style.display = "none";
  }

  return (
    <main className={styles.main}>
      <section className={styles.frame}>
        <img className={styles.img} src={state[page].img} alt="" />
      </section>

      <section
        onClick={() => lightbox()}
        className={styles.removeFriend}
      ></section>

      {friendList.map((item, i) => (
        <OutputFields key={i} item={item} />
      ))}

      <section id="lightbox" className={styles.lbContainer}>
        <section className={styles.lightbox}>
          <h1 className={styles.h1}>Vad vill du göra?</h1>
          <button className={styles.button} onClick={() => handleRemove()}>
            Ta bort vän
          </button>
          <Link to="/editfriend" state={friendList}>
            <button className={styles.button}>Uppdatera vän</button>
          </Link>
        </section>
      </section>
    </main>
  );
}
