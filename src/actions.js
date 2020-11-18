export const increment = value => {
  return {
    type: 'increment',
    value
  }
}
export const decrement = value => {
  return {
    type: 'decrement',
    value
  }
}