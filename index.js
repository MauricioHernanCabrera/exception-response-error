function ExceptionResponseError(error) {
  this.status = error.status || 400;

  Object.entries(error).forEach(([key, value]) => {
    this[key] = value;
  });
}

module.exports = ExceptionResponseError;
