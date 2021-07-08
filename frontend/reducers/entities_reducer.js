import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import propertiesReducer from "./properties_reducer";
import tripsReducer from "./trips_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  properties: propertiesReducer,
  trips: tripsReducer,
});

export default entitiesReducer;