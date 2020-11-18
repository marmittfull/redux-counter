import React from 'react'
import { increment, decrement } from './actions'
import { connect } from 'react-redux'

export const Counter = ({count, increment, decrement}) => {
  return(
    <p>
      <span className="countClass">Contador: {count}</span>
      <button className="incrementClass" onClick={() => increment(10)}>+</button>
      <button className="decrementClass" onClick={() => decrement(10)}>-</button>
    </p>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchsToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchsToProps)
  (Counter)
