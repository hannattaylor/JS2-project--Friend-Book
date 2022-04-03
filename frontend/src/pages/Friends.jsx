import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Friends() {
  const [myFriends, setMyFriends] = useState([]);

  const state = useSelector((state) => {
    return state.friendList;
  });
  console.log(state);

  function handleRemoveFriend(friend) {
    let found = state.find((el) => el === friend);
    state.splice(found, 1);
  }

  return (
    <div>
      <h1>My Friends</h1>
      {state.map((friend, i) => (
        <section key={i}>
          <h5>{friend.name}</h5>
          <img src={friend.img} alt="" />
          <button onClick={() => handleRemoveFriend(friend)}>
            Ta bort vän
          </button>
        </section>
      ))}
    </div>
  );
}
