class ApiError extends Error {
  constructor(
    statusCode,
    message = "something went wrong with the server",
    errors = [],
    stack = ""
  ) {
    super(message); //
    this.statusCode = statusCode;
    this.data = null; // this is the data that will be sent to the client
    this.message = message;
    this.errors = errors;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
