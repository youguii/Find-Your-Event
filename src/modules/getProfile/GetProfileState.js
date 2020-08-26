import { resources_url } from '../../tools/ServerConfig';


let initialState = {
  loading: false,
  profile: null,
  failure: null,
  error: null,
};

const GETPROFILE_LOADING = 'GETPROFILE_LOADING';
const GETPROFILE_SUCCESS = 'GETPROFILE_SUCCESS';
const GETPROFILE_FAILURE = 'GETPROFILE_FAILURE';
const GETPROFILE_ERROR = 'GETPROFILE_ERROR';

export const getProfileLoading = () => ({
  type: GETPROFILE_LOADING,
});

export const getProfileSuccess = (profile) => ({
  type: GETPROFILE_SUCCESS,
  profile: profile,
});

export const getProfileFailure = (failure) => ({
  type: GETPROFILE_FAILURE,
  failure: failure,
});

export const getProfileError = (error) => ({
  type: GETPROFILE_ERROR,
  error: error,
});

export const getProfile = (jwt) => {

  return dispatch => {
    
    dispatch(getProfileLoading());
    
    fetch(`${resources_url}/user/GetProfil?jwt=`+jwt)
    .then((res) => res.json())
    .then((res) => dispatch(getProfileSuccess(res.data)))
    .catch((error) => dispatch(getProfileError(error)))

  }

}

export const deleteUser = (jwt) => {
  return dispatch => {
    
    dispatch(getProfileLoading());
    
    fetch(`${resources_url}/user/DeleteUser?jwt=`+jwt,{
      method: 'post'
    })
    .then((res) => res.json())
    .then((res) => dispatch(getProfileSuccess(res.data)))
    .catch((error) => dispatch(getProfileError(error)))

  }
  
  }
  
const getProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GETPROFILE_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GETPROFILE_SUCCESS':
      return {
        ...state,
        loading: false,
        profile: action.profile,
      };
    case 'GETPROFILE_FAILURE':
      return {
        ...state,
        loading: false,
        failure: action.failure,
      };
    case 'GETPROFILE_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default getProfileReducer;