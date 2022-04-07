export const addFriend = (friend) => ({
  type: "ADD_FRIEND",
  object: friend,
});

export const breakUpWithFriend = (friend) => ({
  type: "REMOVE_FRIEND",
  object: friend,
});

export const updateFriend = (friend) => ({
  type: "UPDATE_FRIEND",
  object: friend,
});
