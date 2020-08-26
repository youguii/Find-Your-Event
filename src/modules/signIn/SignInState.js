import { resources_url } from '../../tools/ServerConfig';

let initialState = {
  loading: false,
  user: null,
  error: null,
};

const SIGNIN_LOADING = 'SIGNIN_LOADING';
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
const SIGNIN_ERROR = 'SIGNIN_ERROR';

export const signInLoading = () => ({
  type: SIGNIN_LOADING,
});

export const signInSuccess = (user) => ({
  type: SIGNIN_SUCCESS,
  user: user,
});

export const signInError = (error) => ({
  type: SIGNIN_ERROR,
  error: error,
});

export const signInUser = (email, password) => {
  return (dispatch) => {
    if (email === '' || password === '') {
      dispatch(signInError('Please complete all fields'));
    } else {
      dispatch(signInLoading());
      fetch(`${resources_url}/user/LoginUser?email=${email}&password=${password}`)
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          dispatch(signInSuccess(response.data))
        } else {
          dispatch(signInError(response.msg))
        }
      })
      .catch(error => dispatch(signInError('Impossible to connect to the server')));
    }
  }
}

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNIN_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    case 'SIGNIN_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default signInReducer;