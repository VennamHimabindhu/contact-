const UserContact = require('../models/UserContact');

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, topic, message } = req.body;

    const newContact = new UserContact({ name, email, phone, topic, message });
    await newContact.save();

    res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
