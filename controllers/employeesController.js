const db = require('../config/db.js')

const employee = {
  getEmployees(cb) {
    db.query('SELECT * FROM employees', (err, employees) => {
      if (err) throw err
      // return items
      cb(employees)
    })
  },
  createEmployees(employee, cb) {
    db.query('INSERT INTO employees SET ?', employee, err => {
      if (err) throw err
      cb()
    })
  },
  updateEmployee(updates, id, cb) {
    db.query('UPDATE employees SET ? WHERE ?', [updates, { employee_id: id }], err => {
      if (err) throw err
      cb()
    })
  }

   module.exports = employee