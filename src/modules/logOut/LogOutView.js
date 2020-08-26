import React from 'react';
import { Redirect } from 'react-router-dom';

export default class LogOutView extends React.Component {

  constructor(){
    super();
  }
  


  render(){
    this.props.logOutUser(this.props.signInReducerState);
    this.props.history.push("/signIn");
    return  window.location.reload(false);
     
  }
}
