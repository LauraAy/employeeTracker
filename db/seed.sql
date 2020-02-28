USE employees_db;

INSERT INTO departments (department_name)
VALUES ('Management'),('IT'), ('Sales'), ('Accounting');

INSERT INTO employee_roles (title, salary, department_id)
VALUES ('Database Administrator', 100000, 2), ('Project Manager', 120000, 1), ('Accountant', 80000, 4), ('Salesperson', 75000, 3);

USE employees_db;
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Regina', 'Castle', 2, null),('Joe', 'Datadude', 1, 1), ('Susan', 'Adderton', 3, 1), ('Bob', 'Smiley', 4, 1);