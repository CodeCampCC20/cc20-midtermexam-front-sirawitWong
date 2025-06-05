export function yupToFormError(err, refs){
    const errorObject = {}
    err.inner.forEach((error) => {
        errorObject[error.path] = error.message;
    })
    const firstError = err.inner[0]?.path
    if (firstError && refs[firstError]?.current){
        refs[firstError].current.focus();
    }
    return errorObject
}