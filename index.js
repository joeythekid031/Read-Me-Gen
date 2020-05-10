const inquirer = require("inquirer");
const fs = require('fs');
const { render } = require('mustache');


inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is your projects name?"
  },
  {
    type: "input",
    name: "myBadge",
    message: "Status for badge?"
  },
  {
    type: "input",
    name: "project-description",
    message: "Describe the project..."
  },
  {
    type: "input",
    name: "toch",
    message: "Enter your table of contents header."
  },
  {
    type: "input",
    name: "toc1",
    message: "Enter your table of contents first bullet point."
  },
  {
    type: "input",
    name: "toc2",
    message: "Enter your table of contents second bullet point."
  },
  {
    type: "input",
    name: "toc3",
    message: "Enter your table of contents third bullet point."
  },
  {
    type: "input",
    name: "installation",
    message: "Installation..."
  },
  {
    type: "input",
    name: "use",
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

]).then(function (data) {

  let template =

    `![alt text](https://img.shields.io/badge/license-{{lic}}-blue.svg)
  ![alt text](https://img.shields.io/badge/Status-{{myBadge}}-blue.svg)
  ## {{title}}
  ### Description:
  #### {{project-description}}
  ### Table of Contents: {{toch}}
  * {{toc1}}
  * {{toc2}}
  * {{toc3}}
  ### Installation:
  #### {{installation}}
  ### Usage: 
  #### {{use}}
  ### License:
  #### {{lic}}
  ### Contributing:
  #### {{cont}}
  ### Tests:
  #### {{tests}}
  ### Questions:
  #### {{qs}}
`
  var filename = data.title.toLowerCase().split(' ').join('') + ".json";
  let output = render(template, data)
  fs.writeFileSync("./readme.md", output)




  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});
