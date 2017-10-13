const errorHandler = (err, msg, rejectFn) => {
  console.error(err)
  rejectFn({
    error: msg,
    code: err.code,
    errno: err.errno
  })
}

module.exports = errorHandler
