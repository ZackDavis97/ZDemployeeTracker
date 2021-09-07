USE workDB;

INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Legal");
INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Account Executive", 60000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 100000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 120000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Aid", 40000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 150000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Dole", 1, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Luna", "Busnuk", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Hillary", "Duff", 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jack", "Black", 4, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sean", "Connery", 5, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mr.", "Bean", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Rice", "Krispy", 3, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Babe", "Ruth", 1, NULL);