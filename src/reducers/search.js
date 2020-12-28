import types from "types";

const initialState = {
  chats: [],
  users: [],
  isSearching: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH: {
      return action.payload;
    }

    case types.CLEAR_SEARCH: {
      return initialState;
    }

    default:
      return state;
  }
}