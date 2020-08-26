import React from 'react';
import { Spinner } from 'react-bootstrap';
import Pages from '../../components/pages/Pages'
import MyMap from '../../components/map/Map';
import './HomeStyle.css';

export default class HomeView extends React.Component {

  /*constructor(props) {
    super(props)
  }*/

  componentDidMount() {
    this.props.loadEvents()
  }

  render() {
    const { loading, events, failure, error } = this.props;
    if (loading) {
      return (
        <div className="homeSpinnerContainer">
          <Spinner animation="border" variant="dark" size="lg" />
        </div>
      );
    }

    if (error) {
      return (<h1>Error</h1>);
    }

    if (failure) {
      return (<h1>Failure</h1>);
    }

    console.log(events);

    return (
      <div>
        <div>
          <MyMap data={events} />
        </div>
        {/* Ajouter le nombre d'events trouvés */}
        <Pages data={events} size={8} lg={3} md={4} sm={6} xs={12} />
      </div>
    )
  }

}