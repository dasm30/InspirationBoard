import React from 'react'
import {
  SET_DATA,
} from 'store/actionTypes'

const initialState = {
  data: [],
}

function reducer(state, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload }
    default:
      return state
  }
}

export default function hook() {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return { state, dispatch }
}
