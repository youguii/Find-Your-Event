import React from 'react';
import { Container,Form, Button, Row, Col, Card} from 'react-bootstrap';
import "./SignUpStyle.css";

export default class SignUpView extends React.Component {

  constructor(){
    super()
    this.state={
      prenom: '',
      nom: '',
      email: '',
      confemail: '',   
      motdepasse: '',
      }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    if( this.state.email === this.state.confemail){
      this.props.signUpCallServer(this.state.prenom, this.state.nom, this.state.adresse, this.state.email, this.state.confemail, this.state.motdepasse);

      this.setState({
  
          prenom: '',
          nom: '',
          adresse: '',
          email: '',
          confemail: '',   
          motdepasse: '',
          
      })
    }else{
      alert("veuillez verifier votre email et confirmation");
    }

    

  }


  render() {
    console.log("les props du signUp")
    console.log(this.props)
    return (
      <Container className="bg-light">
      <Row className="justify-content-center">
        <Col lg={8} md={8} sm={12} xs={12}>
          <Card className="mt-5">
            <Card.Header className="font-weight-bold" size="lg"> <b>Créer un Compte</b> </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="w-75" controlId="signUp_formPrenom">
                    <Form.Label>Prénom</Form.Label>
                    <Form.Control name= "prenom" type ="text"  value = {this.state.prenom} placeholder="Entrez votre prénom" onChange={(e)=> this.handleChange(e)}/>
                </Form.Group>
                <Form.Group className="w-75" controlId="signUp_formNom">
                    <Form.Label>nom</Form.Label>
                    <Form.Control name= "nom" type ="text" value = {this.state.nom} placeholder="Entrez votre nom" onChange={(e)=> this.handleChange(e)} />
                </Form.Group>
                <Form.Group className="w-75" controlId="signUp_formAdresse">
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control name= "adresse" type ="text" value = {this.state.adresse} placeholder="Entrez votre nom" onChange={(e)=> this.handleChange(e)} />
                </Form.Group>
                <Form.Group className="w-75" controlId="signUp_formEmail">
                    <Form.Label>Adresse Email</Form.Label>
                    <Form.Control type="email" name= "email"  value = {this.state.email} placeholder="Entrez votre email" onChange={(e)=> this.handleChange(e)} />
                </Form.Group>
                <Form.Group className="w-75" controlId="signUp_formConfEmail">
                    <Form.Label>Confirmation de l'email</Form.Label>
                    <Form.Control type="email" name= "confemail"  value = {this.state.confemail} placeholder="Confirmez votre adrese email" onChange={(e)=> this.handleChange(e)} />
                </Form.Group>
                <Form.Group className="w-75" controlId="signUp_formMotdePasse">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control name= "motdepasse" type = "password" value = {this.state.motdepasse} placeholder="Entrez votre mot de passe" onChange={(e)=> this.handleChange(e)} />
                </Form.Group>

             
                <Button className="mt-4" variant="primary" type="submit" onClick = {(e) => this.handleSubmit(e)}>
                    Envoyer
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container> 
  
    );
  }

}
