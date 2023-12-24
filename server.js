import express from "express";
import mongoose from "mongoose";
import User from "./schema.js";
import cors from "cors";

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://admtariq11:nodejs-123@learn-mango-db.mvgfzpu.mongodb.net/insta?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.post("/", async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    password: req.body.password,
  });
  const user = await newUser.save();

  res.send({ message: user });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
