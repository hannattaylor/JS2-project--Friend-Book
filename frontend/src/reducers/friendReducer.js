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
        friendList: [
          ...state.friendList.filter((friend) => friend !== action.object),
        ],
      };
    case "UPDATE_FRIEND":
      let foundFriend = state.find((el) => el.name === action.object.name);
      console.log(foundFriend);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default friendReducer;
