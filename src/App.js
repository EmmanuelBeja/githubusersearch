import { Container, Row, Col } from 'reactstrap'
import './App.scss'

function App() {
  return (
    <Container className="app-container">
      <Row>
        <Col lg="12" md="12" sm="12" xs="12" className="header">
          <h2>Search</h2>
        </Col>
      </Row>
    </Container>
  )
}

export default App
