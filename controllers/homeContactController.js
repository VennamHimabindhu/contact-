const HomeContact = require('../models/HomeContact');

exports.submitHomeContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const newContact = new HomeContact({ name, email, phone, message });
    await newContact.save();

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error in homepage contact form:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};
