import { UPDATE_FILTER, CLEAR_FILTER } from "../actions/filter_actions";

const defaultFilters = Object.freeze({
  minGuest: 1,
})

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);

  switch(action.type) {
    case UPDATE_FILTER:
      const newFilter = {
        [action.filter]: action.value
      }
      return Object.assign({}, state, newFilter)
    case CLEAR_FILTER:
      return defaultFilters
    default:
      return state;
  }
}

export default filtersReducer