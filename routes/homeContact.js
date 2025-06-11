const express = require('express');
const router = express.Router();
const { submitHomeContactForm } = require('../controllers/homeContactController');

// POST route for homepage contact form
router.post('/', submitHomeContactForm);

module.exports = router;
