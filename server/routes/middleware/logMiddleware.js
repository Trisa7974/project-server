function logTimestamp(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Request received at ${req.originalUrl}`);
  next();
}

module.exports = logTimestamp;
