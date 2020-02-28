const db = require('../config/db.js')

const department = {
  getDepartments(cb) {
    db.query('SELECT * FROM departments', (err, departments) => {
      if (err) throw err
      // return items
      cb(departments)
    })
  },
  createDepartment (department, cb) {
    db.query('INSERT INTO departments SET ?', department, err => {
      if (err) throw err
      cb()
    })
  },
  updateDepartment(updates, id, cb) {
    db.query('UPDATE departments SET ? WHERE ?', [updates, { department_id: id }], err => {
      if (err) throw err
      cb()
    })
  }

   module.exports = department