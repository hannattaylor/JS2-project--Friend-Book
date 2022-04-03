import React from "react";

export default function FriendCard(props) {
  return (
    <div>
      <h5>{props.friend.name}</h5>
      <img src={props.friend.img} alt="" />
      <button onClick={() => props.handleRemoveFriend(props.friend)}>
        Ta bort vän
      </button>
    </div>
  );
}
