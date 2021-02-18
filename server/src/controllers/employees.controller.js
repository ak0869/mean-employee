const employeeCtrl = {}

const Employee =  require('../models/Employee');

// get all employees
employeeCtrl.getEmployees = async (req,res) =>{
    const employees =  await Employee.find()
    res.json(employees);
}
// create employee
employeeCtrl.createEmployee = async (req,res) =>{
    const newEmployee = new Employee(req.body)
    
    await newEmployee.save()
    
    res.send({message: 'Employee created'});
}
//  get single employee
employeeCtrl.getEmployee =async (req,res) =>{
    const employee = await Employee.findById(req.params.id)
    res.send(employee);
}
// Edit
employeeCtrl.editEmployee = async(req,res) =>{
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: 'employee Updated'})
}

// delete employee
employeeCtrl.deleteEmployee = async (req,res) =>{
   await Employee.findByIdAndDelete(req.params.id);
   res.json({status: 'Employee deleted' })
}


module.exports = employeeCtrl;