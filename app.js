
function start () {
  prompt([

    {
      type: 'input',
      name: 'first_name',
      message: 'What is your first name?'
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is your last name?'
    },
    {
      type: 'list',
      name: 'title',
      messsage: 'What is your title?',
      choices: ['Project Manager', 'Database Administrator', 'Accountant', 'Salesperson' ]
    },
    {
      type: 'input',
      name: 'manager_id',
      message: `What is your manager's id number?`
    }


    
  ])
} 

start()