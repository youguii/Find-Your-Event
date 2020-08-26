import React from 'react';
import { Container, Row, Form, Button, Card, Col, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./SignInStyle.css";

export default class SignInView extends React.Component {

  constructor(){
    super();
    this.state = {
      email: '', 
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signInUser(this.state.email, this.state.password)
  }

  render() {

    const { email, password } = this.state
    const { loading, error } = this.props

    return (
      <Container>
        <Row className="d-flex justify-content-center my-5">
          <Col lg={8} md={8} sm={12} xs={12}>
            <Card>
              <Card.Header className="font-weight-bold">Je me connecte à mon compte</Card.Header>
              <Card.Body>
                <Form>

                  <Form.Group controlId="signInForm_email">
                    <Form.Label>Adresse email<span className="text-danger font-weight-bold ml-1">*</span></Form.Label>
                    <Form.Control className="signIn-bg-input" type="email" name="email" value={email} onChange={(e) => this.handleChange(e)} />
                  </Form.Group>

                  <Form.Group controlId="signInForm_password">
                    <Form.Label>Mot de passe<span className="text-danger font-weight-bold ml-1">*</span></Form.Label>
                    <Form.Control className="signIn-bg-input" type="password" name="password" value={password} onChange={(e) => this.handleChange(e)} />
                  </Form.Group>

                  <Form.Group className="d-flex" controlId="signInForm_buttons">
                    <Button className="w-100 font-weight-bold mt-3" variant="danger" type="button">
                      Effacer
                    </Button>
                    <Button
                      className="w-100 ml-3 font-weight-bold mt-3"
                      variant="success"
                      type="submit"
                      onClick={(e) => this.handleSubmit(e)}
                      disabled={loading}
                    >
                      Connexion
                    </Button>
                  </Form.Group>
                  {error?
                    (<Alert variant="danger">{error}</Alert>):
                    (<></>)
                  }
                </Form>
              </Card.Body>
              <Card.Footer>
                <ul>
                  <li className="font-weight-bold"><Link to="">Informations de connexion oubliées ?</Link></li>
                  <li className="font-weight-bold"><Link to="">Je n'ai pas de compte !</Link></li>
                  <li className="font-weight-bold"><Link to="">Consulter le règlement interne</Link></li>
                </ul>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

}
