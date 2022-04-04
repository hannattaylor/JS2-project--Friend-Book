import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function TableOfFriends() {
  const state = useSelector((state) => {
    return state.friendList;
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <main>
      <h1>Innehållsförteckning</h1>
      <h3>Mina vänner</h3>
      <ul>
        {state.map((friend, i) => (
          <Link to="/friends" key={i} state={friend}>
            <li>{friend.name}</li>
          </Link>
        ))}
      </ul>
      <h3>Lägg till ny vän</h3>
    </main>
  );
}
