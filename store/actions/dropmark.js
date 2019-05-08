import {
  SET_DATA,
} from 'store/actionTypes'

export const setData = (dispatch, data) => {
  return dispatch({
    type: SET_DATA,
    payload: data,
  })
}
