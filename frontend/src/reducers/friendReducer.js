let initialState = {
  friendList: [],
};

const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FRIEND":
      return {
        ...state,
        friendList: [...state.friendList, action.object],
      };
    case "REMOVE_FRIEND":
      return {
        ...state,
        friendList: [...state.friendList, -action.object],
      };
    default:
      return state;
  }
};

export default friendReducer;
