export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const receiveError = error => ({
  type: RECEIVE_ERROR,
  error
});

export const clearError = () => ({
  type: CLEAR_ERROR,
})

export const addError = error => dispatch => {
  dispatch(receiveError(error))
};

export const clearErrors = () => dispatch => {
  dispatch(clearError())
}

