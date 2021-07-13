import * as APIUtil from '../util/reservation_util'

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

export const createReservation = reservation => dispatch => (
  APIUtil.createReservation(reservation)
  .then(() => dispatch(receiveReservation()))
)

export const destroyReservation = id => dispatch => {
  return APIUtil.destroyReservation(id)
  .then((reservation) => {
    return dispatch(removeReservation(reservation))}) 
}