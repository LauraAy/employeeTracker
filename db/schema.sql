DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
  department_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE employee_roles (
  role_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id Int,
  FOREIGN KEY (department_id) REFERENCES departments(department_id)

);

CREATE TABLE employees (
  employee_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  FOREIGN KEY(role_id) REFERENCES employee_roles (role_id),
  manager_id INT,
  FOREIGN KEY(manager_id) REFERENCES employees (employee_id)
);