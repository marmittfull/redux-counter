
const inicialValue = {
  count: 0
}

const counterReducer = (state = inicialValue, action) => {
  switch(action.type){
    case 'increment':
      return state = {...state, count: state.count + action.value}
    case 'decrement':
      return state = {...state, count: state.count - action.value}
    default:
      return state
  }
}
export default counterReducer