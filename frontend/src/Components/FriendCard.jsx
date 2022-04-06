import React from "react";
import { useState, useEffect } from "react";
import OutputFields from "./OutputFields";
import { useSelector } from "react-redux";
import styles from "./FriendCard.module.css";

export default function FriendCard(props) {
  const state = useSelector((state) => {
    return state.friendList;
  });

  const page = props.page;
  console.log(state[page]);

  const friendList = Object.entries(state[page]); //gör om obejct till array för att kunna loopa över
  console.log(friendList);

  return (
    <main className={styles.main}>
      <section className={styles.frame}>
        <img className={styles.img} src={state[page].img} />
      </section>
      {friendList.map((item, i) => (
        <OutputFields key={i} item={item} />
      ))}

      <button
        className={styles.removeFriend}
        onClick={() => props.handleRemoveFriend(state[page])}
      ></button>
    </main>
  );
}
