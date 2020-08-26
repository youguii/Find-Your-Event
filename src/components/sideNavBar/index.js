import { connect } from 'react-redux';
import SideNavBar from './SideNavBar';
import { loadEventsSearch } from '../../modules/search/SearchState'


const mapDispatchToProps = (dispatch) => ({
  loadEventsSearch: (keyWord, category, advanced) => dispatch(loadEventsSearch(keyWord, category, advanced)),
});

export default connect(
  null,
  mapDispatchToProps
)(SideNavBar);