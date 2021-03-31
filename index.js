const inquirer = require("inquirer");
const chalk = require("chalk");
const { program } = require("commander");

program
  .option("-c --color", "Muestra colores")
  .option("a --abrev", "Abreviatura", false);

inquirer.prompt([
  {
    type: "list",
    name: "transporte",
    message: "¿Qué tipo de transporte quiere consultar?",
    choices: [
      {
        name: "metro",
        value: "Metro"
      },
      {
        name: "bus",
        value: "Bus"
      }
    ]
  },
  {
    type: "checkbox",
    name: "informacion extra",
    message: "¿Qué información extra quiere obtener de cada parada?",
    choices: [
      {
        name: "coordenadas",
        value: "Coordenadas"
      },
      {
        name: "fecha-inaguracion",
        value: "Fecha de inaguración"
      }
    ],
    when: respuesta => respuesta.transporte === "Metro",
  },
  {
    type: "confirm",
    name: "info-errores",
    message: "¿Quiere que le informemos de los errores?",
    when: (respuesta) => {
      if (respuesta.transporte === "Bus") {
        console.log(chalk.yellow("No tenemos información disponible sobre los buses"));
        process.exit(0);
      }
    }
  },
  {
    type: "input",
    name: "linia-escogida",
    message: "¿Qué línea quiere consultar?"
  }
])
  .then(resp => {
    if (resp.transporte === "Bus") {
      console.log(chalk.yellow("No tenemos información disponible sobre los buses"));
      process.exit(0);
    }
  });
