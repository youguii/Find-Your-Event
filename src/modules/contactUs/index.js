import { connect } from 'react-redux';
import ContactUsView from './ContactUsView';
import { contactUsCallServer } from './ContactUsState'

const mapStateToProps = (state) => ({
  loading: state.contactUsReducer.loading,
  data: state.contactUsReducer.data,
  failure: state.contactUsReducer.failure,
  error: state.contactUsReducer.error,
  success: state.contactUsReducer.success,
});

const mapDispatchToProps = (dispatch) => ({
  contactUsCallServer: (email, subject, message, closeError, closeSuccess) => dispatch(contactUsCallServer(email, subject, message, closeError, closeSuccess)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactUsView);