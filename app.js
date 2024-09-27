// app.js
const express = require("express");
const contactRoutes = require("./routes/contactRoutes");
const app = express();

app.use(express.json());

// Define routes
app.use("/api", contactRoutes);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
