import React from 'react';
import { Container, Card, Alert, Form, Button, Row, Col } from 'react-bootstrap';

export default class RestoreView extends React.Component {
  constructor(){
    super()
    this.state={
      email:'',
      password:'',
      key:'',
      action:'',
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

  componentWillMount(){
    var vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,k,value) {
        vars[k] = value;
    });


    if(vars["action"]!=null && vars["key"]!=null){
      this.setState({
        key:vars["key"],
        action:vars["action"]
      })
    }

    console.log(vars);
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.restoreCallServer(this.state.email, null, null);

    this.setState({
         email: '',
    })

  }


  handleSubmitReinit = (e) => {
    e.preventDefault();

    this.props.reinitializeCallServer(this.state.key,this.state.password, null, null);
    
    this.setState({
      password:'',
      key:'',
      action:'',
    })
  }

  handleCloseError = () => {
    /*
    if(this.state.action!==''){
      this.props.reinitializeCallServer(this.state.key,this.state.password, true, false);
    }else{
      this.props.restoreCallServer(this.state.email, true, false);
    }*/
    this.props.restoreCallServer(this.state.email, true, false);
  }

  handleCloseSuccess = () => {
    /*if(this.state.action!==''){
      this.props.reinitializeCallServer(this.state.key,this.state.password, false, true);
    }else{
      this.props.restoreCallServer(this.state.email, false, true);  
    }*/
    this.props.restoreCallServer(this.state.email, false, true);
  }

  handleClose = () => {
    this.setState({

      fail: false,
      showFail: true,

    })
  }

  render() {
    const { success, error } = this.props

    if(this.state.action!==''){
      console.log("in reinit")
      return(
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={8} sm={12} xs={12}>
            <Card className="mt-5">
              <Card.Header className="font-weight-bold" size="lg">Récupérer mon compte</Card.Header>
              <Card.Body>
              <Form>
                  <Form.Group controlId="ReinitializePwd_formPwd">
                      <Form.Label>Mon nouveau mot de passe<span className="text-danger font-weight-bold ml-1">*</span></Form.Label>
                      <Form.Control name="password" className="w-75" type="password" value={this.state.password} placeholder="Enter new password ..." onChange={(e)=> this.handleChange(e)}/>
                  </Form.Group>

                  {error!==null?
                    (<Alert variant="danger" onClose={() => this.handleCloseError()} dismissible>{error}</Alert>):
                    (<></>)
                  }  

                  {success!==null?
                    (<Alert variant="success" onClose={() => this.handleCloseSuccess()} dismissible>{success}</Alert>):
                    (<></>)
                  }

                  <Button className="mt-4" variant="primary" type="submit" onClick={(e) => this.handleSubmitReinit(e)}>
                      Envoyer
                  </Button>
                </Form>

              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>

      );
    }else{
      return (
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} md={8} sm={12} xs={12}>
            <Card className="mt-5">
              <Card.Header className="font-weight-bold" size="lg">Récupérer mon compte</Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="restore_formEmail">
                      <Form.Label>Adresse email<span className="text-danger font-weight-bold ml-1">*</span></Form.Label>
                      <Form.Control name="email" className="w-75" type="email" value={this.state.email} placeholder="Enter email" onChange={(e)=> this.handleChange(e)}/>
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

}
