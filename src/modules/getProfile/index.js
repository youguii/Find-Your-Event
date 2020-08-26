import { connect } from 'react-redux';
import GetProfileView from './GetProfileView';
import { getProfile } from './GetProfileState';
import { deleteUser } from './GetProfileState';

const mapStateToProps = (state) => ({
  loading: state.getProfileReducer.loading,
  profile: state.getProfileReducer.profile,
  failure: state.getProfileReducer.failure,
  error: state.getProfileReducer.error,
  jwt: state.signInReducer.user.jwt,
});

const mapDispatchToProps = (dispatch) => ({
  getProfile: (jwt) => dispatch(getProfile(jwt)),
  deleteUser: (jwt) => dispatch(deleteUser(jwt)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetProfileView);