
/**
 * Centralized error handling middleware
 */
const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);

  const statusCode = res.statusCode && res.statusCode !== 200
    ? res.statusCode
    : 500;

  res.status(statusCode).json({
    success: false,
    error: err.message || "Internal Server Error"
  });
};

export default errorHandler;
