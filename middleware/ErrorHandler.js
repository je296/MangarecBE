export const errorResponse = (err, req, res, next) => {
  const statusCode = err.statusCode || 400;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export const invalidPath = (req, res, next) => {
  let error = new Error("404 Error Not Found");
  error.statusCode = 404;
  next(error);
};
