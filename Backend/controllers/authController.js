const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { isStrongPassword } = require('../utils/validators');

exports.signup = async (req, res) => {
    try {
        const { name, email, mobile_number, gender, password, confirm_password } = req.body;

        if (password !== confirm_password) return res.status(400).json({ error: "Passwords don't match" });
        if (!isStrongPassword(password)) return res.status(400).json({ error: "Weak password" });

        const existing = await User.findOne({ email });
        if (existing) return res.status(409).json({ error: "Email already registered" });

        const hash = await bcrypt.hash(password, 10);
        const user = new User({ name, email, mobile_number, gender, password: hash });
        await user.save();

        console.log(`✅ New user created: ${email}`);
        res.status(201).json({ message: "Signup successful" });
    } catch (err) {
        console.error("❌ Signup error:", err.message);
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

        console.log(`✅ Login success: ${email}`);
        res.redirect('/dashboard.html');
    } catch (err) {
        console.error("❌ Signin error:", err.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
