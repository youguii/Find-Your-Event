import { connect } from 'react-redux';
import HomeView from './HomeView';
import { loadEvents } from './HomeState'

const mapStateToProps = (state) => ({
  loading: state.homeReducer.loading,
  events: state.homeReducer.events,
  failure: state.homeReducer.failure,
  error: state.homeReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  loadEvents: () => dispatch(loadEvents()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView);