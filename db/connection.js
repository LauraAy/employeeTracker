const util = require("util")
const { createConnection } = require('mysql2')

const connection = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'employees_db'
})

connection.query = util.promisify(connection.query)

module.exports = connection
