const express = require('express');
const cors = require('cors'); // ✅ Allow cross-origin requests
const helmet = require('helmet'); // ✅ Secure headers middleware
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contact');
const homeContactRoutes = require('./routes/homeContact');
const app = express();
require('dotenv').config();

// ✅ Enable CORS for all origins (public access)
app.use(cors());

// ✅ Use Helmet for setting various HTTP headers for security
app.use(helmet());

// Connect to DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);         // Full Contact Us page
app.use('/api/home-contact', homeContactRoutes); // Homepage "Get in Touch"

// Default route to confirm backend is working
app.get("/", (req, res) => {
  res.send("✅ Contact Backend is Live");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
