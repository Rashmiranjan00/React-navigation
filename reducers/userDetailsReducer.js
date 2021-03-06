defaultState = {
  userInfo: {
    name: 'Rashmiranjan Pradhan',
    addr: 'L-188, Nandan Vihar',
    loc: 'Bbsr',
    prof: 'Developer',
    workex: 'LN employee',
  },
  comments: [],
  users: [],
  error: null,
};

export default (state = defaultState, action) => {
  console.log(action.type)
  // console.log(action.comments)
  // console.log(state.userInfo)
  switch (action.type) {
    case 'USER':
      return state.userInfo;
    case 'COMMENT':
      // console.log("State Return",{...state,comments:[...state.comments, action.comments]})
      return {...state, comments: [...state.comments, action.comments]};

    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: action.users,
      };

    case 'FETCH_USERS_ERROR':
      return {
        ...state,
        error: action.error,
      };

    default:
      return defaultState;
  }
};