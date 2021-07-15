import * as APIUtil from '../util/reservation_util'
import { addError } from './error_actions';

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION"
export const REMOVE_RESERVATION = "REMOVE_RESERVATION"

export const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
})

export const removeReservation = reservation => {
  return {
  type: REMOVE_RESERVATION,
  reservation
}}

export const createReservation = reservation => dispatch => {
  return APIUtil.createReservation(reservation)
  .then(() => {
    return dispatch(receiveReservation())},
    (err) => {
      dispatch(addError(err.responseJSON))
    })
}

export const destroyReservation = id => dispatch => {
  return APIUtil.destroyReservation(id)
  .then((reservation) => {
    return dispatch(removeReservation(reservation))}) 
}