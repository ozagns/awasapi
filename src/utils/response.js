exports.success = (res, data, message = "Success") => {
  res.json({
    status: true,
    message,
    data
  })
}

exports.error = (res, message = "Error", code = 400) => {
  res.status(code).json({
    status: false,
    message
  })
}