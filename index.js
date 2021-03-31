const inquirer = require("inquirer");
const { program } = require("commander");
const fetch = require("node-fetch");
const chalk = require("chalk");
require("dotenv").config();
const preguntas = require("./arrayPreguntas");

let datosApi;
program
  .option("-c, --color <txt>", "Muestra colores")
  .option("-a, --abrev", "Abreviatura", false);

program.parse(process.argv);
const options = program.opts();
const { abrev, color } = options;
inquirer.prompt(preguntas)
  .then(resp => {
    if (resp.transporte === "Bus") {
      console.log(chalk.yellow("No hay información disponible sobre autobuses"));
      process.exit(0);
    }
    if (resp.liniaEscogida) {
      fetch(`${process.env.URL_TMB_LINIAS_METRO}?app_id=${process.env.APP_ID_TMB}&app_key=${process.env.APP_KEY_TMB}`)
        .then(res => res.json())
        .then(datos => {
          const linia = datos.features.find(linia => linia.properties.CODI_LINIA === +resp.liniaEscogida);
          if (typeof linia === "undefined") {
            if (resp.infoErrores === true) {
              console.log(chalk.bold.red("No existe la linia"));
              process.exit(0);
            } else {
              process.exit(0);
            }
          }
        });
    }
  });
