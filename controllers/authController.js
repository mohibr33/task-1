const connection = require("../db"); 
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/jwt');

const signup=(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json("Email and password are required")
    }
    const query=`insert into users (email,password) values(?,?)`;
    connection.query(query,[email,password],(err,result)=>{
     if(err){
        return res.status(500).json("Server Error 500");
     }
     else {
        return res.status(200).json("User has successfully signedup")
     }   
    })
}
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

        const user = result[0];
        const token = generateToken(user); //yahan sai jon user fetch kia hamne ham wo generate token mei jo function banaya hai wahn pass krein hai 

        res.status(200).json({ message: "Login successful", token });
    });
};

module.exports = {
     signup, 
     login, 
    };