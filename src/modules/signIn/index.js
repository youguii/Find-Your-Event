import { connect } from 'react-redux';
import SignInView from './SignInView';
import { signInUser } from './SignInState';

const mapStateToProps = (state) => ({
  loading: state.signInReducer.loading,
  user: state.signInReducer.user,
  error: state.signInReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  signInUser: (email, password) => dispatch(signInUser(email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInView);