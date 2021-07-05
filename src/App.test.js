import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'
import Search from './components/Search'
import Results from './components/Results'
import { ToastContainer } from 'react-toastify'

describe('App', () => {
  const shallowWrapper = shallow(<App />)
  const mountWrapper = mount(<App />)

  it('should render correctly', () => {
    expect(shallowWrapper).toMatchSnapshot()
    expect(shallowWrapper.find('.app-container').length).toEqual(1)
  })
  it('should contain Search component', () => {
    expect(mountWrapper.find(<Search />)).toBeTruthy()
  })
  it('should contain Results component', () => {
    expect(mountWrapper.contains(<Results />)).toBeTruthy()
  })
  it('should contain ToastContainer component', () => {
    expect(mountWrapper.find(<ToastContainer />)).toBeTruthy()
  })
})
