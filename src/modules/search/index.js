import { connect } from 'react-redux';
import SearchView from './SearchView';
import { loadEventsSearch } from './SearchState'

const mapStateToProps = (state) => ({
  loadingSearch: state.searchReducer.loadingSearch,
  eventsSearch: state.searchReducer.eventsSearch,
  failureSearch: state.searchReducer.failureSearch,
  errorSearch: state.searchReducer.errorSearch,
});

const mapDispatchToProps = (dispatch) => ({
  loadEventsSearch: (keyWord, category, advanced) => dispatch(loadEventsSearch(keyWord, category, advanced)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchView);