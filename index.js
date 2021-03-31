const inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "list",
    name: "transporte",
    message: "¿Qué tipo de transporte quiere consultar?",
    choices: [
      {
        name: "metro",
        value: "metro"
      },
      {
        name: "bus",
        value: "bus"
      }
    ]
  }])
  .then(resp => console.log(resp));
