// Import required modules
const User = require('../models/User'); // User model
const jwt = require('jsonwebtoken'); // JWT for token generation
const bcrypt = require('bcryptjs'); // For password hashing

// Controller for user signup
exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password)
            return res.status(400).json({ error: "Name, email, and password are required" });

        // Check if email is already registered
        const existing = await User.findOne({ email });
        if (existing)
            return res.status(409).json({ error: "Email already registered" });

        // Hash the password and save the user
        const hash = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hash });
        await user.save();

        res.status(201).json({ message: "Signup successful" });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Controller for user signin
exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ error: "Invalid email or password" });

        // Compare passwords
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ error: "Invalid email or password" });

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '2h' });

        res.status(200).json({
            message: "Login successful",
            token,
            user: { name: user.name, email: user.email }
        });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};
