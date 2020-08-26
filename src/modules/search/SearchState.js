import { resources_url } from '../../tools/ServerConfig';

let initialState = {
    loadingSearch: false,
    eventsSearch: [],
    failureSearch: null,
    errorSearch: null,
  };
  
  const SEARCH_LOADING = 'SEARCH_LOADING';
  const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
  const SEARCH_FAILURE = 'SEARCH_FAILURE';
  const SEARCH_ERROR = 'SEARCH_ERROR';
  
  export const searchLoading = () => ({
    type: SEARCH_LOADING,
  });
  
  export const searchSuccess = (events) => ({
    type: SEARCH_SUCCESS,
    eventsSearch: events,
  });
  
  export const searchFailure = (failure) => ({
    type: SEARCH_FAILURE,
    failureSearch: failure,
  });
  
  export const searchError = (error) => ({
    type: SEARCH_ERROR,
    errorSearch: error,
  });
  
  export const loadEventsSearch = (keyWord, category, advanced) => {
  
    //advanced est un tableau associatif
    if(category!=null){
      return dispatch => {
    
        dispatch(searchLoading());
        
        fetch(`${resources_url}/event/GetEvents?category=`+category)
        .then((res) => res.json())
        .then((res) => dispatch(searchSuccess(res.data.page!==null?(res.data._embedded!==undefined?res.data._embedded.events:[]):res.data._embedded.events)))
        .catch((error) => dispatch(searchError(error)))
    
      }
    }
    if(keyWord!=null){
      return dispatch => {
    
        dispatch(searchLoading());
        
        fetch(`${resources_url}/event/GetEvents?keyWord=`+keyWord)
        .then((res) => res.json())
        .then((res) => dispatch(searchSuccess(res.data._embedded.events)))
        .catch((error) => dispatch(searchError(error)))
    
      }
    }
    if(advanced!=null){

      let paysCode = {
        France:'FR',
        USA:'US',
        Andorra:'AD',
        Argentina:'AR',
        Australia:'AU',
        Austria:'AT',
        Azerbaijan:'AZ',
        Bahrain:'BH',
        Belgium:'BE',
        Brazil:'BR',
        Bulgaria:'BG',
        Canada:'CA',
        Chile:'CL',
        China:'CN',
        Colombia:'CO',
        Costa_Rica:'CR',
        Croatia:'HR',
        Denmark:'DK',
        Ecuador:'EC',
        Estonia:'EE',
        Finland:'FI',
        Georgia:'GE',
        Germany:'DE',
        Ghana:'GH',
        Great_Britain:'GB',
        Greece:'GR',
        Hungary:'HU',
        Iceland:'IS',
        India:'IN',
        Ireland:'IE',
        Italy:'IT',
        Jamaica:'JM',
        Japan:'JP',
        South_Korea:'KR',
        Lebanon:'LB',
        Luxembourg:'LU',
        Malaysia:'MY',
        Malta:'MT',
        Mexico:'MX',
        Monaco:'MC',
        Morocco:'MA',
        Netherlands:'NL',
        New_Zealand:'NZ',
        Northern_Ireland:'ND',
        Norway:'NO',
        Peru:'PE',
        Poland:'PL',
        Portugal:'PT',
        Romania:'RO',
        Russian_Federation:'RU',
        Saudi_Arabia:'SA',
        Serbia:'RS',
        Singapore:'SG',
        Slovakia:'SK',
        Slovenia:'SI',
        South_Africa:'ZA',
        Spain:'ES',
        Sweden:'SE',
        Switzerland:'CH',
        Taiwan:'TW',
        Thailand:'TH',
        Turkey:'TR',
        Ukraine:'UA',
        United_Arab_Emirates:'AE',
        Uruguay:'UY',
        Venezuela:'VE',
      }

      let URL=`${resources_url}/event/GetEvents?action=vide`

      if(advanced["category"] !== '' && advanced["category"] !== 'all'){
        let cat= advanced["category"]
        URL=URL+"&category="+cat;
      }

      if(advanced["country"] !== '' && advanced["country"] !== 'None'){
        let country= paysCode[advanced["country"]]
        URL=URL+"&country="+country;
      }

      if(advanced["city"] !== ''){
        let city= advanced["city"]
        URL=URL+"&city="+city;
      }
      
      if(advanced["dateStart"] !== ''){
        let dateStart= advanced["dateStart"]+'T14:00:00Z'
        URL=URL+"&startDate="+dateStart;
      }

      if(advanced["dateEnd"] !== ''){
        let dateEnd= advanced["dateEnd"]+'T14:00:00Z'
        URL=URL+"&endDate="+dateEnd;
      }

      return dispatch => {
    
        dispatch(searchLoading());
        
        fetch(URL)
        .then((res) => res.json())
        .then((res) => dispatch(searchSuccess(res.data.page!==null?(res.data._embedded!==undefined?res.data._embedded.events:[]):res.data._embedded.events)))
        .catch((error) => dispatch(searchError(error)))
      }
    }
    return null;

       
  }

  
  const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_LOADING':
        return {
          ...state,
          loadingSearch: true,
        };
      case 'SEARCH_SUCCESS':
        return {
          ...state,
          loadingSearch: false,
          eventsSearch: action.eventsSearch,
        };
      case 'SEARCH_FAILURE':
        return {
          ...state,
          loadingSearch: false,
          failureSearch: action.failureSearch,
        };
      case 'SEARCH_ERROR':
        return {
          ...state,
          loadingSearch: false,
          errorSearch: action.errorSearch,
        };
      default:
        return state;
    }
  }
  
  export default searchReducer;