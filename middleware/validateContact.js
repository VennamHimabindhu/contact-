module.exports = (req, res, next) => {
  const { email, message } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'A valid email is required.' });
  }

  if (!message || message.length < 10 || message.length > 1000) {
    return res.status(400).json({ error: 'Message must be between 10 and 1000 characters.' });
  }

  next();
};
