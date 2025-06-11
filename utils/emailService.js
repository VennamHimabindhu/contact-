

// utils/emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendConfirmationEmail = async (recipientEmail, recipientName = '') => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipientEmail,
    subject: 'Contact Form Submission Received',
    text: `Hello ${recipientName || 'User'},\n\nThank you for contacting us. We have received your message and will respond shortly.\n\nBest regards,\nSupport Team`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Confirmation email sent to', recipientEmail);
  } catch (error) {
    console.error('Failed to send confirmation email:', error.message);
  }
};

module.exports = { sendConfirmationEmail };
