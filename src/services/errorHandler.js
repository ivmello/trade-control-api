const errorHandler = (err, msg, rejectFn) => {
  console.error(err)
  let errorObj = {}

  if (err) {
    const { code, errno } = err
    errorObj = {
      error: msg,
      code,
      errno
    }
  } else {
    errorObj = {
      error: msg
    }
  }

  rejectFn(errorObj)
}

module.exports = errorHandler
