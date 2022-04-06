import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Table.module.css";

export default function TableOfFriends() {
  const state = useSelector((state) => {
    return state.friendList;
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Innehållsförteckning</h1>
      <section className={styles.wrap}>
        <Link to="/friends">
          <h3 className={styles.h3}>Mina vänner</h3>
        </Link>
        <ol className={styles.ul}>
          {state.map((friend, i) => (
            <Link to="/friends" key={i} state={friend}>
              <li className={styles.li}>{friend.name}</li>
            </Link>
          ))}
        </ol>
        <section className={styles.addfriend}>
          <Link to="/newfriend">
            <h3 className={styles.h3}>Lägg till ny vän</h3>
          </Link>
          <i></i>
        </section>
      </section>
    </main>
  );
}
