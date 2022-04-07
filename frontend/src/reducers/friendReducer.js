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
      console.log(action.object);
      let foundIndex = state.friendList.findIndex(
        (el) => el.name === action.object.name
      );
      console.log(foundIndex);
      let newState = state.friendList.slice();
      newState.splice(foundIndex, 1, action.object);
      console.log(newState);
      return {
        ...state,
        friendList: newState,
      };
    default:
      return state;
  }
};

export default friendReducer;
