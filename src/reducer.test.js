import reducer from './reducer'


test('reducer without initialState', () => {
  const action = { type: 'increment', value: 10 }
  const state = reducer(undefined, action)
  expect(state).toEqual({
    count: 10
  })
})
test('reducer increment', () => {
  const initialState = {
    count: 0
  }
  const action = { type: 'increment', value: 10}

  const state = reducer(initialState, action)
  expect(state).toEqual({ count: 10 })
})
test('reducer decrement', () => {
  const initialState = {
    count: 10
  }
  const action = { type: 'decrement', value: 10}

  const state = reducer(initialState, action)
  expect(state).toEqual({ count: 0 })
})