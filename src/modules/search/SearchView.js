import React from 'react';
import { Spinner } from 'react-bootstrap';
import Pages from '../../components/pages/Pages'
import MyMap from '../../components/map/Map';
import './SearchStyle.css';

export default class SearchView extends React.Component {

  render() {
    const { loadingSearch, eventsSearch, failureSearch, errorSearch } = this.props;
    if (loadingSearch) {
      return (
        <div className="searchSpinnerContainer">
          <Spinner animation="border" variant="dark" size="lg" />
        </div>
      );
    }

    if (errorSearch) {
      return (<h1>Error</h1>);
    }

    if (failureSearch) {
      return (<h1>Failure</h1>);
    }

    console.log(eventsSearch);

    return (
      <div>
        <div>
          <MyMap data={eventsSearch} />
        </div>
        <Pages data={eventsSearch} size={8} lg={3} md={4} sm={6} xs={12} />
      </div>
    )
  }

}

