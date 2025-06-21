const errorHandler = (err, req, res, next) => {
  // Log error to console for developers
  console.error('🔥 Error:', err);

  // If the status code is still 200 (OK), override it to 500
  const statusCode = res.statusCode && res.statusCode !== 200
    ? res.statusCode
    : 500;

  // Send a consistent error response
  res.status(statusCode).json({
    message: err.message || 'Something went wrong',
    // Show the stack trace only in development
    stack: process.env.NODE_ENV === 'production' ? '🍃' : err.stack
  });
};

export default errorHandler;
