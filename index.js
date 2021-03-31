const inquirer = require("inquirer");
const chalk = require("chalk");

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
    when: respuesta => respuesta.transporte === "Metro"
  }
])
  .then(resp => {
    /* switch (resp.transporte) {
      case "Bus":
        console.log(chalk.yellow("No tenemos información disponible sobre los buses"));
        process.exit(0);
        break;
      case "Metro":
        break;
      default:
        break;
    } */
    if (resp.transporte === "Bus") {
      console.log(chalk.yellow("No tenemos información disponible sobre los buses"));
      process.exit(0);
    }
  });
