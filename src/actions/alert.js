//////////* Actions */////////////

export const showSuccessMessage = (message) => {
    return {
        type: 'SUCCESS',
        alert: {
            type: 'success-message',
            message: message
        }
    }
}

export const showErrorMessage = (message) => {
    return {
        type: 'ERROR',
        alert: {
            type: 'error-message',
            message: message
        }
    }
}

export const clearMessage = () => {
    return {
        type: 'CLEAR'
    }
}