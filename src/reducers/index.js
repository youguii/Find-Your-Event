import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import homeReducer from '../modules/home/HomeState';
import searchReducer from '../modules/search/SearchState';
import contactUsReducer from '../modules/contactUs/ContactUsState';
import restoreReducer from '../modules/restore/RestoreState';
import signUpReducer from '../modules/signUp/SignUpState';
import signInReducer from '../modules/signIn/SignInState';
import logOutReducer from '../modules/logOut/LogOutState';
import getProfileReducer from '../modules/getProfile/GetProfileState';


const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

export default createStore(
  combineReducers({
    homeReducer,
    searchReducer,
    contactUsReducer,
    restoreReducer,
    signUpReducer,
    signInReducer,
    logOutReducer,
    getProfileReducer,
  }),
  applyMiddleware(...middleware)
);