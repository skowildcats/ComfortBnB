import { RECEIVE_RESERVATION, REMOVE_RESERVATION } from "../actions/reservation_actions";

const reservationReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATION:
      return state
    case REMOVE_RESERVATION:  
      const newReservation = {[action.reservation.id]: action.reservation}
      return Object.assign({}, state, newReservation)
    default:
      return state;
  }
};

export default reservationReducer