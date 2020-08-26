import React from 'react';
import { Card, Form, FormControl, Button, Col, InputGroup, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SideNavBar.css';

class SideNavBar extends React.Component {

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }
  
  render() {

    return (
    <div className="mainSideNavBar">
      <SearchBar func={this.props.loadEventsSearch}/>
      <Categories func={this.props.loadEventsSearch}/>
      <AdvancedSearch func={this.props.loadEventsSearch}/>
    </div>
    );
  }
}

export class SearchBar extends React.Component {

  constructor(props){
    super(props)
    this.state={
      text:'',
    }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.func(this.state.text,null,null)

    this.setState({
      text:'',
    })

  }
  
  
  render() {

    return (
      <Card className="card mb-4">
      <h5 className="card-header">Recherche par mot clé</h5>
      <InputGroup>
        <FormControl
          id="searchBarText"
          name="text"
          placeholder="Tapez un mot clé ..."
          aria-label="Tapez un mot clé ..."
          value={this.state.text}
          onChange={(e)=> this.handleChange(e)}
        />
        <InputGroup.Append id="inputGroup-sizing-lg">
          <Button variant="outline-secondary" onClick={(e) => this.handleSubmit(e)}>
            <Link className="item text-dark m-auto" to="/search">
              Search
            </Link>
          </Button>
        </InputGroup.Append>
      </InputGroup>
      </Card>
    );
    }
  }

const Categories = (props) => (

  <div className="card mb-4">
  <h5 className="card-header">Recherche par categories</h5>
      <ListGroup as="ul" className="text-dark" variant="flush">

        <ListGroup.Item as="li" action variant="light" onClick={() => props.func(null,'KZFzniwnSyZfZ7v7nJ',null)}>
          <Link className="item text-dark" to="/search">
            Musique
          </Link>
        </ListGroup.Item>

        <ListGroup.Item as="li" action variant="light" onClick={() => props.func(null,'KZFzniwnSyZfZ7v7nE',null)}>
          <Link className="item text-dark"  to="/search">
            Sport 
          </Link>
        </ListGroup.Item>

        <ListGroup.Item as="li" action variant="light" onClick={() => props.func(null,'KZFzniwnSyZfZ7v7na',null)}>
          <Link className="item text-dark" to="/search">
            Arts/Theatre
          </Link> 
        </ListGroup.Item>

        <ListGroup.Item as="li" action variant="light" onClick={() => props.func(null,'KZFzniwnSyZfZ7v7nn',null)}>
          <Link className="item text-dark" to="/search">
            Film 
          </Link>
        </ListGroup.Item>

        <ListGroup.Item as="li" action variant="light" onClick={() => props.func(null,'KZFzniwnSyZfZ7v7n1',null)}>
          <Link className="item text-dark" to="/search">
            Divers  
          </Link>
        </ListGroup.Item>

      </ListGroup>
</div>

);

export class AdvancedSearch extends React.Component {

  constructor(props){
    super(props)
    this.state={
      city:'',
      country:'',
      dateStart: '',
      dateEnd: '',
      category: '',
    }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleChangeCat = (e) => {
    this.setState({
        category: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

 
    this.props.func(null,null,this.state)


    console.log(this.state.country);
    console.log(this.state.city);
    console.log(this.state.dateStart);
    console.log(this.state.dateEnd);
    console.log(this.state.category);

    this.setState({
      city:'',
      country:'',
      dateStart: '',
      dateEnd: '',
      category: '',
    })

  }

  render() {

    return (
        <div className="card mb-4">
        <h5 className="card-header">Recherche avancée</h5>
          <Form className="container">
              <Form.Row className="mt-2">
                <Form.Group as={Col} controlId="formGridCountry">
                  <Form.Label><b>Pays</b></Form.Label>
                  <Form.Control as="select" drop="down" name="country" value={this.state.country} onChange={(e)=> this.handleChange(e)}>
                    <option>None</option>
                    <option>Andorra</option>
                    <option>Anguilla</option>
                    <option>Argentina</option>
                    <option>Australia</option>
                    <option>Austria</option>
                    <option>Azerbaidjan</option>
                    <option>Bahamas</option>
                    <option>Bahrain</option>
                    <option>Belgium</option>
                    <option>Brazil</option>
                    <option>Bulgaria</option>
                    <option>Canada</option>
                    <option>Chile</option>
                    <option>China</option>
                    <option>Colombia</option>
                    <option>Costa_Rica</option>
                    <option>Croatia</option>
                    <option>Denmark</option>
                    <option>Ecuador</option>
                    <option>Estonia</option>
                    <option>Finland</option>
                    <option>France</option>
                    <option>Georgia</option>
                    <option>Germany</option>
                    <option>Ghana</option>
                    <option>Great_Britain</option>
                    <option>Greece</option>
                    <option>Hungary</option>
                    <option>Iceland</option>
                    <option>India</option>
                    <option>Ireland</option>
                    <option>Italy</option>
                    <option>Japan</option>
                    <option>South_Korea</option>
                    <option>Lebanon</option>
                    <option>Lithuania</option>
                    <option>Luxembourg</option>
                    <option>Malaysia</option>
                    <option>Malta</option>
                    <option>Mexico</option>
                    <option>Monaco</option>
                    <option>Morocco</option>
                    <option>Netherlands</option>
                    <option>New_Zealand</option>
                    <option>Northern_Ireland</option>
                    <option>Norway</option>
                    <option>Peru</option>
                    <option>Poland</option>
                    <option>Portugal</option>
                    <option>Romania</option>
                    <option>Russian_Federation</option>
                    <option>Saudi_Arabia</option>
                    <option>Serbia</option>
                    <option>Singapore</option>
                    <option>Slovakia</option>
                    <option>Slovenia</option>
                    <option>South_Africa</option>
                    <option>Spain</option>
                    <option>Sweden</option>
                    <option>Switzerland</option>
                    <option>Taiwan</option>
                    <option>Thailand</option>
                    <option>Turkey</option>
                    <option>Ukraine</option>
                    <option>United_Arab_Emirates</option>
                    <option>USA</option>
                    <option>Uruguay</option>
                    <option>Venezuela</option>

                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Form.Row className="mt-2">
                <Form.Group as={Col} controlId="formGridCountry">
                  <Form.Label><b>Ville</b></Form.Label>
                  <FormControl
                    name="city"
                    placeholder="Tapez le nom de la ville"
                    value={this.state.city}
                    onChange={(e)=> this.handleChange(e)}
                  />
                </Form.Group>
              </Form.Row>

              <Form.Row className="mt-2">
                <Form.Group as={Col} controlId="formGridCountry">
                  <Form.Label><b>Date de début</b></Form.Label>
                  <Form.Control type="date" name="dateStart" value={this.state.dateStart} onChange={(e)=> this.handleChange(e)}/>   
                </Form.Group>
              </Form.Row>

              <Form.Row className="mt-2">
                <Form.Group as={Col} controlId="formGridCountry">
                  <Form.Label><b>Date de fin</b></Form.Label>
                  <Form.Control type="date" name="dateEnd" value={this.state.dateEnd} onChange={(e)=> this.handleChange(e)}/>   
                </Form.Group>
              </Form.Row>

              <Form.Row className="mt-2">
                <Col ml-2>
                  <h6><b>Catégories</b></h6>
                </Col>
              </Form.Row>

              <Form.Row className="justify-content-center">
                <Col>
                  <Form.Check 
                    type='radio'
                    name='group'
                    value='KZFzniwnSyZfZ7v7nJ'
                    label='Musique'
                    onChange={(e)=> this.handleChangeCat(e)}
                    inline
                  />
                </Col>
                <Col>
                  <Form.Check 
                    type='radio'
                    name='group'
                    value='KZFzniwnSyZfZ7v7nE'
                    label='Sport'
                    onChange={(e)=> this.handleChangeCat(e)}
                    inline
                  />
                </Col>
              </Form.Row>
              <Form.Row className="justify-content-center">
                <Col>
                  <Form.Check 
                    type='radio'
                    name='group'
                    value='KZFzniwnSyZfZ7v7nn'
                    label='Film'
                    onChange={(e)=> this.handleChangeCat(e)}
                    inline
                  />
                </Col>
                <Col>
                  <Form.Check 
                    type='radio'
                    name='group'
                    value='KZFzniwnSyZfZ7v7na'
                    label='Arts/Theatre'
                    onChange={(e)=> this.handleChangeCat(e)}
                    inline
                  />
                </Col>
              </Form.Row>
              <Form.Row className="justify-content-center">
                <Col>
                  <Form.Check 
                    type='radio'
                    name='group'
                    value='KZFzniwnSyZfZ7v7n1'
                    label='Divers'
                    onChange={(e)=> this.handleChangeCat(e)}
                    inline
                  />
                </Col>
                <Col>
                  <Form.Check 
                    type='radio'
                    name='group'
                    value='all'
                    label='All'
                    onChange={(e)=> this.handleChangeCat(e)}
                    inline
                  />
                </Col>
              </Form.Row>

              <Form.Row className="justify-content-center">
                  <Button variant="outline-secondary mt-4 mb-4 justify-content-center" onClick={(e) => this.handleSubmit(e)}>
                    <Link className="item text-dark m-auto" size="lg" to="/search"> Search </Link>
                  </Button>
              </Form.Row>


          </Form>
        </div>
    );
    }
}

export default SideNavBar;