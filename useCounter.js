import {useState} from 'react'

const useCounter = (initialState = 10) => {
  
  const [state, setState] = useState(initialState) //10

  const reset = () => {
    setState(initialState)
  }
  
  const increment = (factor = 1) => {
    setState(state + factor)
  }

  const decrement = (factor = 1) => {
    setState(state - factor)
  }
  
  return {
    state, 
    increment,
    decrement,
    reset 
  }

}

export default useCounter
