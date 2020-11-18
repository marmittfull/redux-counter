import React, { Component } from 'react'
import Counter from './Counter'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import counterReducer from './reducer'

let store = createStore(counterReducer, applyMiddleware(logger))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Counter />
        </div>
      </Provider>
    )
  }
}
export default App