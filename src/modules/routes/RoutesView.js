import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderNavBar from '../../components/headerNavBar/HeaderNavBar';
import SideNavBar from '../../components/sideNavBar';
import FooterBar from '../../components/footerBar/FooterBar';
import { loggedRoutes, notLoggedRoutes } from './Config';

export default class Routes extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <HeaderNavBar isLogged={this.props.user} name='Hello You' />
        <Container fluid>
          <Row>
            <Col lg={3} md={4} sm={6} xs={12}>
              <SideNavBar />
            </Col>
            <Col lg={9} md={8} sm={6} xs={12}>
              <Switch>
                {this.props.user?
                  loggedRoutes.map((route, index) => (
                    <Route key={index.toString()} path={route.path} component={route.component} exact={route.isExact} />
                  )):
                  notLoggedRoutes.map((route, index) => (
                    <Route key={index.toString()} path={route.path} component={route.component} exact={route.isExact} />
                  ))
                }
              </Switch>
            </Col>
          </Row>
        </Container>
        <FooterBar />
      </BrowserRouter>
    )
  }

}