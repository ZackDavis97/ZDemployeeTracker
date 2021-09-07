const mysql = require('mysql');
const inquirer = require("inquirer");
const table = require("console.table");
const { allowedNodeEnvironmentFlags } = require('process');

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345",
    database: "workdb"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    askQuestions();
});

function askQuestions() {
    inquirer.prompt({
        message: "What do you want to do?",
        type: "list",
        choices: [
            "add employee",
            "add department",
            "add role",
            "view all departments",
            "view all employees",
            "update employee role",
            "Quit"
        ],
        name: "choice"
    }).then(answer => {
        switch (answers.choice) {
            case "add employee":
                addEmployee()
                break;
            
            case "add department":
                addDepartment()
                break;

            case "add role":
                addRole()
                break;

            case "view all departments":
                viewDepartments()
                break;

            case "view all employees":
                viewEmployees()
                break;

            case "update employee role":
                updateEmployeeRole()
                break;

            default:
                connection.end()
                break;
        }
    })
}

function addEmployee() {
    inquirer.prompt([{
            type: "input",
            name: "firstName",
            message: "What is the employees first name?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employees last name?"
        },
        {
            type: "number",
            name: "roleId",
            message: "What is the employees role ID?"
        },
        {
            type: "number",
            name: "managerId",
            message: "What is the employees manager's ID?"
        }
    ]).then(function(res) {
        connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [res.firstName, res.lastName, res.roleId, res.managerId], function(err, data) {
            if (err) throw err;
            console.table("Successful");
            askQuestions();
        })
    })
}
