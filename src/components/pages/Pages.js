import React from 'react';
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';
import './Pages.css'

class Pages extends React.Component{

  constructor(props) {
    super(props);
    this.state = { num: 1, };
  }

  changePage(num) {
    const { size, data } = this.props;
    const len = Math.ceil(data.length / size);
    if (num === this.state.num || num < 1 || num > len) return;
    this.setState({ num: num });
  }

  renderPage() {
    const { size, lg, md, sm, xs, data } = this.props;
    const page = this.state.num - 1
    let tab = []
    for (var i=page*size; i<data.length && i<(page+1)*size; i++) {
      tab.push(
        <Col key={i.toString()} lg={lg} md={md} sm={sm} xs={xs}>
          <Elem key={i.toString()} event={data[i]} />
        </Col>
      );
    }
    return tab;
  }

  render() {
    const { size, data } = this.props;
    const num = this.state.num
    const len = Math.ceil(data.length / size);
    return (
      <Container className="mainPages" fluid>
        <Row>
          { this.renderPage() }
        </Row>
        <div className="my-5 d-flex justify-content-center">
          <Pagination>
            <Pagination.First onClick={() => this.changePage(1)} />
            <Pagination.Prev onClick={() => this.changePage(num-1)} />
            <Pagination.Item>page {num}</Pagination.Item>
            <Pagination.Next onClick={() => this.changePage(num+1)} />
            <Pagination.Last onClick={() => this.changePage(len)} />
          </Pagination>
        </div>
      </Container>
    );
  }

}

const Elem = ({event}) => (
  <Card className="my-3">
    <Card.Img variant="top" src={event.images[0].url} />
    <Card.Body>
      <Card.Title>{event.name}</Card.Title>
      <Card.Text>{event.dates.start.localDate}</Card.Text>
      <Card.Text>
        {event._embedded.venues[0].city?event._embedded.venues[0].city.name:''},
        {event._embedded.venues[0].country?event._embedded.venues[0].country.name:''}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default Pages;