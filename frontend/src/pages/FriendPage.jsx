import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FriendCard from "../Components/FriendCard";
import { breakUpWithFriend } from "../actions/friendAction";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./FriendPage.module.css";

export default function Friends() {
  const navigate = useNavigate();
  const state = useSelector((state) => {
    return state.friendList;
  });
  const [page, setPage] = useState(0);

  const [friend, setFriends] = useState([state]);

  useEffect(() => {
    let stateCopy = [...state];
    setFriends(stateCopy);
  }, [state]);

  const location = useLocation();
  const clickedFriend = location.state;

  useEffect(() => {
    if (clickedFriend === null) {
      setPage(0);
    } else {
      let index = state.findIndex((el) => el.name === clickedFriend.name);
      setPage(index);
    }
  }, []);

  const dispatch = useDispatch();

  function handleRemoveFriend(friend) {
    if (state.length === 1) {
      dispatch(breakUpWithFriend(friend));
      navigate("/tableoffriends");
    } else {
      dispatch(breakUpWithFriend(friend));
    }

    if (page === 0) {
      setPage((prevNum) => Math.max(prevNum, 0));
    } else {
      setPage((prevNum) => Math.max(prevNum - 1, 0));
    }
  }

  function goBack() {
    if (page === 0) {
      navigate("/tableoffriends");
    } else {
      setPage((prevNum) => Math.max(prevNum - 1, 0));
    }
  }

  return (
    <main className={styles.main}>
      <section className={styles.book}>
        <FriendCard handleRemoveFriend={handleRemoveFriend} page={page} />
      </section>
      <section className={styles.buttonsContainer}>
        <button className={styles.prevButton} onClick={() => goBack()}>
          Tillbaka
        </button>
        <button
          className={styles.nextButton}
          onClick={() =>
            setPage((prevNum) => Math.min(prevNum + 1, state.length - 1))
          }
        >
          Nästa
        </button>
      </section>
    </main>
  );
}
