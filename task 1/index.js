const express=require("express")
const mysql=require("mysql2")
const jwt=require("jsonwebtoken")
const app=express();

app.use(express.json())
const connection=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"contact"

})
app.post("/contact",(req,res)=>{
 const {name,email,message}=req.body;
  if(!name || !email || !message ){
    return res.status(400).send("Please provide your name,email and message ");
  }
const q1=`Insert into form (name,email,message) values('${req.body.name}','${req.body.email}','${req.body.message}')`
connection.query(q1,(err,result)=>{
    if(err){
        return res.status(500).send("Internal Server error")
    }
    else {
        res.status(200).json({
            message2: "User has been added successfully!",
            
                id: result.insertId,
                name: name,
                email: email,
                message: message
            
    })
}
})
});
app.listen(3001,()=>{
    console.log("Server is running on port 3001");
})