let initialState = {
  loading: false,
  events: [],
  failure: null,
  error: null,
};

const HOME_LOADING = 'HOME_LOADING';
const HOME_SUCCESS = 'HOME_SUCCESS';
const HOME_FAILURE = 'HOME_FAILURE';
const HOME_ERROR = 'HOME_ERROR';

export const homeLoading = () => ({
  type: HOME_LOADING,
});

export const homeSuccess = (events) => ({
  type: HOME_SUCCESS,
  events: events,
});

export const homeFailure = (failure) => ({
  type: HOME_FAILURE,
  failure: failure,
});

export const homeError = (error) => ({
  type: HOME_ERROR,
  error: error,
});

export const loadEvents = () => {

  return dispatch => {
    
    dispatch(homeLoading());
    
    fetch("https://app.ticketmaster.com/discovery/v2/events?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0&unit=km&source=ticketmaster&locale=*&size=50")
    .then((res) => res.json())
    .then((res) => dispatch(homeSuccess(res._embedded.events)))
    .catch((error) => dispatch(homeError(error)))

  }

}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HOME_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'HOME_SUCCESS':
      return {
        ...state,
        loading: false,
        events: action.events,
      };
    case 'HOME_FAILURE':
      return {
        ...state,
        loading: false,
        failure: action.failure,
      };
    case 'HOME_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export default homeReducer;