USE employees_db;

INSERT INTO department (name)
VALUES ('Engineering'), 
('Management'), 
('Sales'), 
('Accounting');

INSERT INTO role (title, salary, department_id)
VALUES ('Database Administrator', 100000, 1), 
('Lead Developer', 130000, 1), 
('Junior Developer', 80000, 1),
('Project Manager', 120000, 2), 
('Salesperson', 75000, 3), 
('Accountant', 80000, 4), ;

USE employees_db;
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Joe', 'Datadude', 1, 1),
 ('Laura', 'Coder', 2, 1), 
 ('JD', 'Dev', 3, 1), 
 ('Regina', 'Castle', 4, null), 
 ('Bob', 'Smiley', 5, 1), 
 ('Linda', 'Lovely', 5, 1),
('Susan', 'Adderton', 6, 1)