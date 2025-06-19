// index.js

// Initial object
const employee = {
  name: "Alice Johnson",
  streetAddress: "123 Maple Street"
};

// 1. Non-destructive update
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

// 2. Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// 3. Non-destructive delete
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// 4. Destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// // Export everything for the test suite
// module.exports = {
//   employee,
//   updateEmployeeWithKeyAndValue,
//   destructivelyUpdateEmployeeWithKeyAndValue,
//   deleteFromEmployeeByKey,
//   destructivelyDeleteFromEmployeeByKey
// };
