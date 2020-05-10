const inquirer = require("inquirer");
const fs = require('fs');
let  {render} = require('mustache');

let template = `h1{{title}}
{{project-description}}
# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------ `

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
  fs.writeFileSync("./readme", output)
  
  
  

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});
