// Write your solution in this file!
let employee = {
    name: "Sam",
    streetAddress: "123 NY St"
};

// Non-destructive update
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
    ...employee,
    [key]: value
  };
}


// Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}


//Delete (Non-Destructive)
function deleteFromEmployeeByKey(employee, name){
    let newEmployee={...employee};
    delete newEmployee.name;
    return newEmployee;
}


//Delete (Destructive)
function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return employee;
}