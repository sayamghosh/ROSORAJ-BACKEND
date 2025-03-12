const express = require("express");
const app = express();
const port = 8000;
const Sweet = require("./model/sweet");
const userRoute = require("./routes/user.route");

const dbConnect = require("./lib/dbconfig");

dbConnect();

app.use(express.json()); // Middleware to parse incoming requests with JSON payloads

app.use("/user", userRoute);

app.get("/sweet/all", async (req, res) => {
  // Find a document in a collection.
  const result = await Sweet.find();
  return res.json(result);
});

app.get("/",(req,res)=>{
  return res.send("Welcome to Rosoraj, the king of all sweets!")
})

// app.post("/", async (req, res) => {
//   // Create a new document in a collection.
//   const result = await Sweet.create({
//     name: "Rasgulla2",
//     description: "A syrupy dessert popular in the Indian subcontinent.",
//     price_per_piece: 10,
//     availability: "Available",
//     img_url: "https://example.com/rasgulla.jpg",
//   });
//   return res.json(result);
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
