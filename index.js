const express = require("express");
const app = express();
const port = 8000;
const Sweet = require("./model/sweet.model");
const userRoute = require("./routes/user.route");
const sweetRoute = require("./routes/sweet.route");

const dbConnect = require("./lib/dbconfig");

dbConnect();

app.use(express.json()); // Middleware to parse incoming requests with JSON payloads

app.use("/user", userRoute);
app.use('/sweet',sweetRoute);

app.get("/",(req,res)=>{
  return res.send("Welcome to Rosoraj, the king of all sweets!")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
