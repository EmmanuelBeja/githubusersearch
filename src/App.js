import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { Container, Row, Col } from 'reactstrap'
import Search from './components/Search'
import Results from './components/Results'

import './App.scss'

const App = () => {
  return (
    <Provider store={store}>
      <Container className="app-container">
        <Row>
          <Col lg="12" md="12" sm="12" xs="12" className="header">
            <img
              src="https://i.pinimg.com/originals/28/02/00/28020003d4a493c78d8202ba6c35f179.gif"
              className="header-image"
              alt="github octocat"
            />
          </Col>
        </Row>
        <Search />
        <Results />
      </Container>
      <ToastContainer />
    </Provider>
  )
}

export default App
