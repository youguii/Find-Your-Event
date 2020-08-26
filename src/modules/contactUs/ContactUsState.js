import { resources_url } from '../../tools/ServerConfig';

let initialState = {
    loading: false,
    failure: null,
    data: null,
    success: null,
    error: null,
  };
  
  const CONTACTUS_LOADING = 'CONTACTUS_LOADING';
  const CONTACTUS_SUCCESS = 'CONTACTUS_SUCCESS';
  const CONTACTUS_FAILURE = 'CONTACTUS_FAILURE';
  const CONTACTUS_ERROR = 'CONTACTUS_ERROR';
  
  export const contactUsLoading = () => ({
    type: CONTACTUS_LOADING,
  });
  
  export const contactUsSuccess = (data, success) => ({
    type: CONTACTUS_SUCCESS,
    data: data,
    success : success,
  });
  
  export const contactUsFailure = (failure) => ({
    type: CONTACTUS_FAILURE,
    failure: failure,
  });
  
  export const contactUsError = (error) => ({
    type: CONTACTUS_ERROR,
    error: error,
  });
  
  export const contactUsCallServer = (email, subject, message, closeError, closeSuccess) => {
  
    return dispatch => {
      if(closeError===true){
        dispatch(contactUsError(null));

      } else if(closeSuccess===true){
        dispatch(contactUsSuccess(null, null));

      } else {
        if (email === '' || subject === '' || message === '') {
          dispatch(contactUsError('Please complete all fields'));
        } else {
          dispatch(contactUsLoading());
  
          fetch(`${resources_url}/user/ContactUs?email=`+email+`&subject=`+subject+`&message=`+message)
          .then(response => response.json())
          .then(response => {
            if (response.success) {
              dispatch(contactUsSuccess(response.data, 'Message sended with success'))
            } else {
              dispatch(contactUsError(response.msg))
            }
          })
          .catch(error => dispatch(contactUsError('Impossible to connect to the server')));
        }
     
      }   
  
    }
  
  }
  
  const contactUsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CONTACTUS_LOADING':
        return {
          ...state,
          loading: true,
        };
      case 'CONTACTUS_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.data,
          success: action.success,
        };
      case 'CONTACTUS_FAILURE':
        return {
          ...state,
          loading: false,
          failure: action.failure,
        };
      case 'CONTACTUS_ERROR':
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  }
  
  export default contactUsReducer;