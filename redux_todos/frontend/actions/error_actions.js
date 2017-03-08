export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


export const receiveErrors = errors => ({
  // debugger
    type: RECEIVE_ERRORS,
    errors
});

export const clearErrors = errors => ({
  // debugger
    type: CLEAR_ERRORS,
    errors
});
