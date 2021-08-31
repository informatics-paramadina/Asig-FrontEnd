export default (error) => {
    const fieldError = typeof  error === "object" && error?.reduce((ListErrors, error) => {
        if(error?.field) {
            ListErrors[error.field] = error
        }
        return ListErrors
    }, {})

    return fieldError;
}