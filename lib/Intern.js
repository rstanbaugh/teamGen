const Employee = require('./Employee')

// Intern Class
class Engineer extends Employee {
  constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.title = 'Intern';
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern