const db = require('../config/db.js')

const employee_role = {
  getEmployee_roles(cb) {
    db.query('SELECT * FROM employee_roles', (err, employee_roles) => {
      if (err) throw err
      // return items
      cb(employee_roles)
    })
  },
  createEmployee_roles(employee_role, cb) {
    db.query('INSERT INTO employee_roles SET ?', employee_role, err => {
      if (err) throw err
      cb()
    })
  },
  updateEmployee_role(updates, id, cb) {
    db.query('UPDATE employee_roles SET ? WHERE ?', [updates, { role_id: id }], err => {
      if (err) throw err
      cb()
    })
  }

  module.exports = employee_role