export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILER';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const clearFilter = () => ({
  type: CLEAR_FILTER,
})  

export const updateFilter = (filter, value) => (dispatch) => {
  dispatch(changeFilter(filter, value))
};

export const clearFilters = () => dispatch => {
  dispatch(clearFilter())
}

