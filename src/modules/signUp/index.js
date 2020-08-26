import { connect } from 'react-redux';
import SignUpView from './SignUpView';
import { signUpCallServer } from './SignUpState'

const mapStateToProps = (state) => ({
  loading: state.signUpReducer.loading,
  data: state.signUpReducer.data,
  failure: state.signUpReducer.failure,
  error: state.signUpReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  signUpCallServer: (prenom, nom, email, confemail, motdepasse) => dispatch ( signUpCallServer(prenom, nom, email, confemail, motdepasse)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpView);