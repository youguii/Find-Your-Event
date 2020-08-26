// Importer les différentes pages
import Home from '../home';
import ContactUs from '../contactUs';
import Restore from '../restore';
import Search from '../search';
import SignUp from '../signUp';
import SignIn from '../signIn';
import LogOut from '../logOut';
import GetProfile from '../getProfile';
import AboutUsView from '../aboutUs/AboutUsView';

export const loggedRoutes = [
  {
    path: "/",
    component: Home,
    isExact: true,
  },
  {
    path: "/contactUs",
    component: ContactUs,
    isExact: false,
  },
  {
    path: "/aboutUs",
    component: AboutUsView,
    isExact: false,
  },
  {
    path: "/search",
    component: Search,
    isExact: false,
  },
  {
    path: "/logOut",
    component: LogOut,
    isExact: false,
  },
  {
    path: "/getProfile",
    component: GetProfile,
    isExact: false,
  }
];

export const notLoggedRoutes = [
  {
    path: "/",
    component: Home,
    isExact: true,
  },
  {
    path: "/contactUs",
    component: ContactUs,
    isExact: false,
  },
  {
    path: "/signIn",
    component: SignIn,
    isExact: false,
  },
  {
    path: "/signUp",
    component: SignUp,
    isExact: false,
  },
  {
    path: "/restore",
    component: Restore,
    isExact: false,
  },
  {
    path: "/aboutUs",
    component: AboutUsView,
    isExact: false,
  },
  {
    path: "/search",
    component: Search,
    isExact: false,
  },
];