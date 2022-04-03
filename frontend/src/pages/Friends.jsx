import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FriendCard from "../Components/FriendCard";
import { breakUpWithFriend } from "../actions/friendAction";

export default function Friends() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state.friendList;
  });
  console.log(state);

  function handleRemoveFriend(friend) {
    dispatch(breakUpWithFriend(friend));
  }

  return (
    <div>
      <h1>My Friends</h1>
      {state.map((friend, i) => (
        <FriendCard
          handleRemoveFriend={handleRemoveFriend}
          friend={friend}
          key={i}
        />
      ))}
    </div>
  );
}
