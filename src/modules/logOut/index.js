import { connect } from 'react-redux';
import { logOutUser } from './LogOutState';
import LogOutView from './LogOutView';

const mapStateToProps = (state) => (
  {
    signInReducerState: state.signInReducer,
});

const mapDispatchToProps = (dispatch) => ({
  logOutUser: (user) => dispatch(logOutUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOutView);