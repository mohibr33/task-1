const connection = require("../db"); 
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/jwt'); 

const signup = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json("Email and password are required");
    }

    const query = `INSERT INTO users (email, password) VALUES (?, ?)`;
    connection.query(query, [email, password], (err, result) => {
        if (err) {
            return res.status(500).json("Server Error 500");
        } else {
            const User = {
                id: result.insertId,
                email: email,
            };

            const token = generateToken(User); 

            // Respond with the token and success message
            return res.status(200).json({
                message: "User has successfully signed up",
                token: token 
            });
        }   
    });
};
const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
    connection.query(query, [email, password], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Login failed", error: err });
        }

        if (result.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        res.status(200).json({ message: "Login successful" });
    });
};

module.exports = {
    signup, 
    login
};
