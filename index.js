const inquirer = require("inquirer");
const { program } = require("commander");
const chalk = require("chalk");
const preguntas = require("./arrayPreguntas");

program
  .option("-c --color", "Muestra colores")
  .option("a --abrev", "Abreviatura", false);

inquirer.prompt(preguntas)
  .then(resp => {
    if (resp.transporte === "Bus") {
      console.log(chalk.yellow("No tenemos información disponible sobre los buses"));
      process.exit(0);
    }
  });
