import React from 'react';
import { Container, Card, Form, Alert, Button, Row, Col } from 'react-bootstrap';
import "./ContactUsStyle.css";


export default class ContactUsView extends React.Component {

  constructor(){
    super()
    this.state={
      email:'',
      objet:'',
      message:'',
      fail: false,
      showFail: true,
    }
  }

  toggleShowFail = () => {

    if(this.state.showFail===true)
      this.setState({
        showFail: false,
      });
    else
      this.setState({
        showFail: true,
      });
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.contactUsCallServer(this.state.email, this.state.objet, this.state.message, null, null);
    

    this.setState({
         email: '',
         objet: '',
         message:  '',
    })

  }

  handleCloseError = () => {
    this.props.contactUsCallServer(null, null, null, true, false);
  }

  handleCloseSuccess = () => {
    this.props.contactUsCallServer(null, null, null, false, true);
  }

  render() {

    const { success, error } = this.props

    return (
      
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={8} sm={12} xs={12}>
            <Card className="mt-5">
              <Card.Header className="font-weight-bold" size="lg">Contacter l'équipe <b>FindYourEvent</b></Card.Header>
              <Card.Body>
              <Form>
                  <Form.Group controlId="contactUs_formEmail">
                      <Form.Label>Adresse email<span className="text-danger font-weight-bold ml-1">*</span></Form.Label>
                      <Form.Control name="email" type="email" value={this.state.email} placeholder="Enter email" onChange={(e)=> this.handleChange(e)}/>
                  </Form.Group>

                  <Form.Group controlId="contactUs_formObjet">
                      <Form.Label>Objet<span className="text-danger font-weight-bold ml-1">*</span></Form.Label>
                      <Form.Control name="objet" type="text" value={this.state.objet} onChange={(e)=> this.handleChange(e)}/>
                  </Form.Group>

                  <Form.Group controlId="contactUs_formMessage">
                      <Form.Label>Message<span className="text-danger font-weight-bold ml-1">*</span></Form.Label>
                      <Form.Control name="message" as="textarea" rows="3" value={this.state.message} onChange={(e)=> this.handleChange(e)}/>
                  </Form.Group>

                  {error!==null?
                    (<Alert variant="danger" onClose={() => this.handleCloseError()} dismissible>{error}</Alert>):
                    (<></>)
                  }    
                  {success!==null?
                    (<Alert variant="success" onClose={() => this.handleCloseSuccess()} dismissible>{success}</Alert>):
                    (<></>)
                  }

                  <Button className="mt-4" variant="primary" type="submit" onClick={(e) => this.handleSubmit(e)}>
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