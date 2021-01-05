//require dependancies
const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const logo = require('asciiart-logo');



let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Tank@1027",
    database: "employee_tracker_db"
});

// connect to the mysql server
connection.connect(function(err) {
    if (err) throw err;
    init();
});

//init logo function
function init() {
    const logoText = logo
        ({
        name: "Employee Management System",
        font: "Colossal",
        fontSize: "5px",
        borderColor: "black",
        logoColor: "red",
        textColor: "bold-black",
        })
    .render();
    console.log(logoText);
    
    setTimeout(() => {
        start();
      }, 2000);
    
};

let rolesarray = [];
let departmentsarray = [];
let employeesarray = [];
let managersarray = [];

function start() {
    //Run functions to make empty arrays at start
    roleArray();
    departmentArray();
    employeeArray();
    managerArray();
    inquirer
      .prompt({
        name: "choice",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "Add Department",
          "Add Role",
          "Add Employee",
          "View All Departments",
          "View All Roles",
          "View all Employees",
          "Remove Employee",
          "Remove Role",
          "Remove Department",
          "Update Employee's Role",
          "Exit",
        ],
      })
      .then(function (answer) {
        switch (answer.choice) {
          case "Add Department":
            addDepartment();
            break;
  
          case "Add Role":
            addRole();
            break;
  
          case "Add Employee":
            addEmployee();
            break;
  
          case "View All Departments":
            viewDepartments();
            break;
  
          case "View All Roles":
            viewRoles();
            break;
  
          case "View all Employees":
            viewEmployees();
            break;
  
          case "Remove Employee":
            removeEmployee();
            break;
  
          case "Remove Role":
            removeRole();
            break;
  
          case "Remove Department":
            removeDepartment();
            break;
  
          case "Update Employee's Role":
            updateEmployee();
            break;

          case "Exit":
            connection.end();
            break;
        }
    });
  }





//array functions
function roleArray() {
    connection.query("SELECT * FROM role", (err, results) => {
        if (err) throw err;
        rolesarray = [];
        for (let i = 0; i < results.length; i++) {
            rolesarray.push(results[i].id + " " + results[i].title)
        };
    });
};

function employeeArray () {
    connection.query("SELECT * FROM employee", (err, results) => {
        if (err) throw err;
        employeesarray = [];
        for (let i = 0; i < results.length; i++) {
            employeesarray.push(results[i].id + " " + results[i].first_name + " " + results[i].last_name)
        };
    });
};

function departmentArray() {
    connection.query("SELECT * FROM department", (err, results) => {
        if (err) throw err;
        departmentsarray = [];
        for (let i = 0; i < results.length; i++) {
            departmentsarray.push(results[i].id + " " + results[i].dept_name)
        };
    });
};

function managerArray() {
    connection.query("SELECT * FROM employee WHERE manager_id IS null", (err, results) => {
        if (err) throw err;
        managersarray = [];
        for (let i = 0; i < results.length; i++) {
            managersarray.push(results[i].id + " " + results[i].first_name + " " + results[i].last_name)
        };
    });
};