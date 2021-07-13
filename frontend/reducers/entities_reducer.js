import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import propertiesReducer from "./properties_reducer";
import tripsReducer from "./trips_reducer";
import reservationReducer from "./reservation_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  properties: propertiesReducer,
  trips: tripsReducer,
  reservations: reservationReducer,
});

export default entitiesReducer;