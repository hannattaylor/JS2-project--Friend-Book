export const addFriend = (friend) => ({
  type: "ADD_FRIEND",
  object: friend,
});

export const breakUpWithFriend = (friend) => ({
  type: "REMOVE_FRIEND",
  object: friend,
});
