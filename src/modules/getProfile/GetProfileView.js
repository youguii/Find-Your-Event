import React from 'react';
import { Spinner } from 'react-bootstrap';
import Pages from '../../components/pages/Pages';
import { Container, Form, Card, Row, Col, Button } from 'react-bootstrap';
 

export default class getProfileView extends React.Component {

  componentWillMount() {
    this.props.getProfile(this.props.jwt)
  }

  handleDelete = (e) => {
    e.preventDefault();
    this.props.deleteUser(this.props.jwt);
    this.props.history.push("/signIn");
    window.location.reload(false);
  }


  render() {
    const { loading, profile, failure, error } = this.props;
    console.log(profile);
    if (loading) {
      return (
        <div className="getProfileSpinnerContainer">
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


    return (
      <Container>
      <Row className="d-flex justify-content-center my-5">
        <Col lg={8} md={10} sm={12} xs={12}>
          <Card>
            <Card.Header className="font-weight-bold">Informations du compte</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="signInForm_email">
                  <Form.Label><b>Nom</b>    :  {profile?profile.userInfos.last_name:"default"} </Form.Label>
                </Form.Group>
                <Form.Group controlId="signInForm_email">
                  <Form.Label><b>Prenom</b>   :   {profile?profile.userInfos.first_name:"default"} </Form.Label>
                </Form.Group>
                <Form.Group controlId="signInForm_email">
                  <Form.Label><b>Adresse email</b>    :   {profile?profile.userInfos.email:"default"} </Form.Label>
                </Form.Group>
                <Form.Group controlId="signInForm_email">
                  <Form.Label><b>Adresse</b>    :   {profile?profile.userInfos.address:"default"} </Form.Label>
                </Form.Group>

              </Form>
            </Card.Body>
            <Card.Footer>
              <ul>
                <Button className="w-100 font-weight-bold mt-3" variant="danger" type="button">
                      Modifier mot de passe
                </Button>
                <Button className="w-100 font-weight-bold mt-3" variant="danger" type="button" onClick={(e) => this.handleDelete(e)} >
                      Supprimer mon Compte
                </Button>

              </ul>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center my-5">
        <h5>Mes évenements favoris </h5>
        <Pages data={profile?profile.events:[]} size={8} lg={3} md={4} sm={6} xs={12} />
      
      </Row>
    </Container>
   )
  }

}