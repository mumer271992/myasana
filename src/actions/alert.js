export const showSuccessMessage = message => ({
  type: 'SUCCESS',
  alert: {
    type: 'success-message',
    message,
  }
});

export const showErrorMessage = message => ({
  type: 'ERROR',
  alert: {
    type: 'error-message',
    message,
  }
});

export const clearMessage = () => ({
  type: 'CLEAR'
});
