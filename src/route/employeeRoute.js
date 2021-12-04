const route = require('express').Router();
const employeeModel = require('../model/employeeModel');
const uuid = require('uuid')

route.get("/employees", async (req, res) => {
    const employees = await employeeModel.find({})
    console.log(employees)
    console.log()
    res.send({employees: employees})
})

route.post("/employees", async (req, res) => {
    const newEmployee = new employeeModel(req.body);
    newEmployee.id = uuid.v4();
    newEmployee.save(function(err, user) {
        if (err) {
            console.log(err);
            res.send('Bad Request');
        }

        res.send({msg: "Saved new employee!"})
    });
})


route.get("/employees/:id", async (req, res) => {
    const employee = await employeeModel.find({id: req.params.id});
    res.send({employee})

});

route.put("/employees/:id", async (req, res) => {
    const employee = await employeeModel.findOneAndUpdate({id: req.params.id}, req.body);
    res.send({msg: "Updated!"})
})

route.delete("/employees/:id", async(req, res) => {
    await employeeModel.findOneAndDelete({id: req.params.id});
    res.send({msg: "Deleted!"})
})

module.exports = route;