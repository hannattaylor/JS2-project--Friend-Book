import React from "react";
import { Link } from "react-router-dom";
import styles from "./Start.module.css";
import frameWithFriend from "../frame-with-friend.svg";

export default function Start() {
  return (
    <Link to="/tableoffriends">
      <section className={styles.bigWrap}>
        <h1 className={styles.h1}>Mina vänner</h1>
        <img className={styles.img} src={frameWithFriend} alt="" />
      </section>
    </Link>
  );
}
