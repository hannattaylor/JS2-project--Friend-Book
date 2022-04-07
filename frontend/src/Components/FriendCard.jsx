import React from "react";
import { useState, useEffect } from "react";
import OutputFields from "./OutputFields";
import { useSelector } from "react-redux";
import styles from "./FriendCard.module.css";
import { Link } from "react-router-dom";

export default function FriendCard(props) {
  const state = useSelector((state) => {
    return state.friendList;
  });

  const page = props.page;
  console.log(state[page]);

  const friendList = Object.entries(state[page]); //gör om obejct till array för att kunna loopa över
  console.log(friendList);

  //fixa funktion för img

  return (
    <main className={styles.main}>
      <section className={styles.frame}>
        <img className={styles.img} src={state[page].img} alt="../thecat.png" />
      </section>
      {friendList.map((item, i) => (
        <OutputFields key={i} item={item} />
      ))}
      {/* <Link className={styles.removeFriend} to="/editfriend" state={friendList}> */}
      <button
        className={styles.removeFriend}
        onClick={() => props.handleRemoveFriend(state[page])}
      ></button>
      {/* </Link> */}
    </main>
  );
}
