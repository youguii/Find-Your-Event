import React from 'react';
import './Map.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export default class MyMap extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 48.8534,
      lng: 2.3488,
      zoom: 2
    }
  }

  render() {
    let events = this.props.data
    
    return (
    <Map 
      className="mt-1 mb-2 leaflet-container"
      center={[this.state.lat, this.state.lng]} 
      zoom={this.state.zoom} 
    >

       <TileLayer
          attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {events.map((event, index) => {
          if (event._embedded.venues[0].location)
            return (
              <Marker
                key={index.toString()}
                position={[event._embedded.venues[0].location.latitude,
                  event._embedded.venues[0].location.longitude,          
                ]}
              >
                <Popup>{event.name}</Popup>
              </Marker>
            );
          else
            return (<></>);
        })}
        
    </Map>
    );
  }
}

