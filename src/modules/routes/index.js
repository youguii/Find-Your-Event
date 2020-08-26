import { connect } from 'react-redux';
import RoutesView from './RoutesView';

const mapStateToProps = (state) => ({
  user: state.signInReducer.user,
});

export default connect(
  mapStateToProps,
  null
)(RoutesView);