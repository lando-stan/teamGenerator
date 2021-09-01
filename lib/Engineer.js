const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

// Format for making new engineer : const Engineer1 = new Engineer('ted' , 3345, tedtalk@ted.com, ted_ted2)
//how to connect inquirer to these classes
