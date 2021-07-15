const express = require('express');
const mongoose = require('mongoose');
require("./db/conn");
const Student = require("./models/students")
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

//create a new student
app.post("/students", async (req, res) => {
    // res.send("hiii");
    try {
        const user = new Student(req.body)
        const insert= await user.save();
            res.status(201).send(insert);

        }catch(e){
            res.status(400).send(e);
    }
})


//update student data 
app.patch("/students/:id", async (req, res) => {
    // res.send("patch requist");
    try {
        const _id=req.params.id;
        const update= await Student.findByIdAndUpdate(_id,req.body, {
            new:true
        });
            res.send(update);

        }catch(e){
            res.status(500).send(e);
    }
})

app.listen(PORT, () => {
    console.log(`Server running on  ${PORT}`);
})