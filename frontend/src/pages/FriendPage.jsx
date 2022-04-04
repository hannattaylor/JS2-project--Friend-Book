import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FriendCard from "../Components/FriendCard";
import { breakUpWithFriend } from "../actions/friendAction";
import { useLocation } from "react-router-dom";

export default function Friends() {
  const state = useSelector((state) => {
    return state.friendList;
  });
  const [page, setPage] = useState(0);
  console.log(state);
  const [friend, setFriends] = useState([state]);
  console.log(friend);

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
    //lägga till så att om listan är tom kommer man auto till new friend?
    dispatch(breakUpWithFriend(friend));
    if (page === 0) {
      setPage((prevNum) => Math.max(prevNum, 0));
    } else {
      setPage((prevNum) => Math.max(prevNum - 1, 0));
    }
  }

  return (
    <div>
      <h1>My Friends</h1>
      <FriendCard
        handleRemoveFriend={handleRemoveFriend}
        friend={friend}
        index={page}
      />
      <button onClick={() => setPage((prevNum) => Math.max(prevNum - 1, 0))}>
        Tillbaka
      </button>
      <button
        onClick={() =>
          setPage((prevNum) => Math.min(prevNum + 1, state.length - 1))
        }
      >
        Nästa
      </button>
    </div>
  );
}
