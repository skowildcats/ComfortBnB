import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import propertiesReducer from "./properties_reducer";
import reservationsReducer from "./reservations_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  properties: propertiesReducer,
  reservations: reservationsReducer
});

export default entitiesReducer;