import { resources_url } from '../../tools/ServerConfig';

let initialState = {
    loading: false,
    failure: null,
    data: null,
    success: null,
    error: null,
  };
  
  const RESTORE_LOADING = 'RESTORE_LOADING';
  const RESTORE_SUCCESS = 'RESTORE_SUCCESS';
  const RESTORE_FAILURE = 'RESTORE_FAILURE';
  const RESTORE_ERROR = 'RESTORE_ERROR';
  
  export const restoreLoading = () => ({
    type: RESTORE_LOADING,
  });
  
  export const restoreSuccess = (data, success) => ({
    type: RESTORE_SUCCESS,
    data: data,
    success : success,
  });
  
  export const restoreFailure = (failure) => ({
    type: RESTORE_FAILURE,
    failure: failure,
  });
  
  export const restoreError = (error) => ({
    type: RESTORE_ERROR,
    error: error,
  });
  
  export const restoreCallServer = (email, closeError, closeSuccess) => {

    return dispatch => {
      if(closeError===true){
        dispatch(restoreError(null));

      } else if(closeSuccess===true){
        dispatch(restoreSuccess(null, null));

      } else {
        if (email === '') {
          dispatch(restoreError('Please complete all fields'));
        } else {
          dispatch(restoreLoading());
  
          fetch(`${resources_url}/user/AskRestoreUser?email=`+email)
          .then(response => response.json())
          .then(response => {
            if (response.success) {
              dispatch(restoreSuccess(response.data,'Restore link sended, please check your e-mails'))
            } else {
              dispatch(restoreError(response.msg))
            }
          })
          .catch(error => dispatch(restoreError('Impossible to connect to the server')));
        }
     
      }   
    }
  
  }

  export const reinitializeCallServer = (key, newPwd, closeError, closeSuccess) => {

    return dispatch => {
      if(closeError===true){
        dispatch(restoreError(null));

      } else if(closeSuccess===true){
        dispatch(restoreSuccess(null, null));

      } else {
        if (newPwd === '') {
          dispatch(restoreError('Please complete all fields'));
        } else {
          dispatch(restoreLoading());
  
          fetch(`${resources_url}/user/RestoreUser?key=`+key+`&newPassword=`+newPwd)
          .then(response => response.json())
          .then(response => {
            if (response.success) {
              dispatch(restoreError(response.data, 'Your account is restored successfully'))
            } else {
              dispatch(restoreError(response.msg))
            }
          })
          .catch(error => dispatch(restoreError('Impossible to connect to the server')));
        }
     
      }   
  
    }
  
  }
  
  const restoreReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'RESTORE_LOADING':
        return {
          ...state,
          loading: true,
        };
      case 'RESTORE_SUCCESS':
        return {
          ...state,
          loading: false,
          data: action.data,
          success: action.success,
        };
      case 'RESTORE_FAILURE':
        return {
          ...state,
          loading: false,
          failure: action.failure,
        };
      case 'RESTORE_ERROR':
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  }
  
  export default restoreReducer;