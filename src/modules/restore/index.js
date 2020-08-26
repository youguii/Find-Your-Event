import { connect } from 'react-redux';
import RestoreView from './RestoreView';
import { restoreCallServer, reinitializeCallServer } from './RestoreState'

const mapStateToProps = (state) => ({
  loading: state.restoreReducer.loading,
  data: state.restoreReducer.data,
  failure: state.restoreReducer.failure,
  error: state.restoreReducer.error,
  success: state.restoreReducer.success,
});

const mapDispatchToProps = (dispatch) => ({
  restoreCallServer: (email, closeError, closeSuccess) => dispatch(restoreCallServer(email, closeError, closeSuccess)),
  reinitializeCallServer: (key, newPwd, closeError, closeSuccess) => dispatch(reinitializeCallServer(key, newPwd, closeError, closeSuccess)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestoreView);