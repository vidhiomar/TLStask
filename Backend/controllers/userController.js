const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password)
            return res.status(400).json({ error: "Name, email, and password are required" });

        const existing = await User.findOne({ email });
        if (existing)
            return res.status(409).json({ error: "Email already registered" });

        const hash = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hash });
        await user.save();

        res.status(201).json({ message: "Signup successful" });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
};


exports.signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ error: "Invalid email or password" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ error: "Invalid email or password" });

        // 🔐 Generate JWT
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
