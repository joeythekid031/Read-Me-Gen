const inquirer = require("inquirer");
const fs = require('fs');
const  {render} = require('mustache');


let template = `
##{{title}}
Description: {{project-description}}
Table of Contents: ..* {{toc}}
Installation: {{installation}}
Usage: {{use}}
License: {{lic}}
Contributing:{{cont}}
Tests: {{tests}}
Questions: {{qs}}
`

// * The generated README includes the following sections: 
//   * Title
//   * Description
//   * Table of Contents
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions

// * The generated README includes 1 badge that's specific to the repository.

inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is your projects name?"
  },
  {
    type: "input",
    name: "project-description",
    message: "Describe the project..."
  },
  {
    type: "input",
    name: "toc",
    message: "Enter your table of contents..."
  },
  {
    type: "input",
    name: "installation",
    message: "Installation..."
  },
  {
    type: "input",
    name: "usage",
    message: "Usage?"
  },
  {
    type: "input",
    name: "lic",
    message: "Usage license?"
  },
  {
    type: "input",
    name: "cont",
    message: "Enter your contributors"
  },
  {
    type: "input",
    name: "tests",
    message: "Tests for the project?"
  },
  {
    type: "input",
    name: "qs",
    message: "What questions do you have?"
  },
  // {
  //   type: "checkbox",
  //   message: "What languages do you know?",
  //   name: "stack",
  //   choices: [
  //     "HTML", 
  //     "CSS", 
  //     "JavaScript", 
  //     "MySQL"
  //   ]
  // },
  // {
  //   type: "list",
  //   message: "What is your preferred method of communication?",
  //   name: "contact",
  //   choices: [
  //     "email",
  //     "phone",
  //     "telekinesis"
  //   ]
  // }
]).then(function(data) {

  var filename = data.title.toLowerCase().split(' ').join('') + ".json";
  let output = render(template, data)
  fs.writeFileSync("./readme.md", output)
  
  
  

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});
