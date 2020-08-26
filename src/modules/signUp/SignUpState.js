import { resources_url } from '../../tools/ServerConfig';

let initialState = {
    loading: false,
    failure: null,
    data: null,
    error: null,
  };
  
  const SIGNUP_LOADING = 'SIGNUP_LOADING';
  const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
  const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
  const SIGNUP_ERROR = 'SIGNUP_ERROR';
  
  export const signUpLoading = () => ({
    type: SIGNUP_LOADING,
  });
  
  export const signUpSuccess = (data) => ({
    type: SIGNUP_SUCCESS,
    data: data,
  });
  
  export const signUpFailure = (failure) => ({
    type: SIGNUP_FAILURE,
    failure: failure,
  });
  
  export const signUpError = (error) => ({
    type: SIGNUP_ERROR,
    error: error,
  });
  
  export const signUpCallServer = (prenom, nom, adresse, email, confemail, motdepasse) => {
  
    return dispatch => {
      
      dispatch(signUpLoading());
      
      fetch(`${resources_url}/user/CreateUser?last_name=`+nom+`&first_name=`+prenom+`&email=`+email+`&password=`+motdepasse+`&address=`+adresse,{
        method: 'post'
      })
      .then((res) => res.json())
      .then((res) => dispatch(signUpSuccess(res)))
      .catch((error) => dispatch(signUpError(error)))
  
    }
  
  }
  
  const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SIGNUP_LOADING':
        return {
          ...state,
          loading: true,
        };
      case 'SIGNUP_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.data,
        };
      case 'SIGNUP_FAILURE':
        return {
          ...state,
          loading: false,
          failure: action.failure,
        };
      case 'SIGNUP_ERROR':
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  }
  
  export default signUpReducer;