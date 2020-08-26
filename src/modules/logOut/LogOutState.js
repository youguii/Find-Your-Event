
let initialState = {
  loading: false,
  user: null,
  error: null,
};

const LOGOUT_SUCCESS =  'LOGOUT_SUCCESS';

export const logOutSuccess = (signInReducerState) => ({
  type: LOGOUT_SUCCESS,
  etat : signInReducerState,
});


export const logOutUser = (signInReducerState) => {
  console.log("dans logout");
  console.log(signInReducerState);
  return (dispatch) => {
    dispatch (logOutSuccess(signInReducerState));
  }
}

const logOutReducer = (state= initialState, action) => {
  switch (action.type) {
 
    case  'LOGOUT_SUCCESS':
      action.etat.user = null;
      return state;
    default:
      return state;
  }
}

export default logOutReducer;