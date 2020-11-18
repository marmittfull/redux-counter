import { increment, decrement  } from './actions'

test('Action: increment', () => {
  let incr = increment(15)
  expect(incr).toEqual({
    type: 'increment',
    value: 15
  })
})
test('Action: decrement', () => {
  let decr = decrement(15)
  expect(decr).toEqual({
    type: 'decrement',
    value: 15
  })
})