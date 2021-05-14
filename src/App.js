import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { Container, Row, Col } from 'reactstrap'
import Search from './components/Search'

import './App.scss'

const App = () => {
  return (
    <Provider store={store}>
      <Container className="app-container">
        <Row>
          <Col lg="12" md="12" sm="12" xs="12" className="header">
            <h2>Search</h2>
          </Col>
        </Row>
        <Search />
      </Container>
      <ToastContainer />
    </Provider>
  )
}

export default App
