
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentDB");

const Student = mongoose.model("Student", {
    name: String,
    age: Number
});

// CREATE
app.post("/students", async (req, res) => {
    res.json(await Student.create(req.body));
});

// READ
app.get("/students", async (req, res) => {
    res.json(await Student.find());
});

// UPDATE
app.put("/students/:id", async (req, res) => {
    res.json(await Student.findByIdAndUpdate(
        req.params.id, req.body, { new: true }
    ));
});

app.listen(5000, () => console.log("Server running on port 5000"));
