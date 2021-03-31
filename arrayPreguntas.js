const preguntas = [
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
    name: "infoExtra",
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
    when: respuesta => respuesta.transporte === "Metro"
  },
  {
    type: "confirm",
    name: "infoErrores",
    message: "¿Quiere que le informemos de los errores?",
    when: respuesta => respuesta.transporte === "Metro"
  },
  {
    type: "input",
    name: "liniaEscogida",
    message: "¿Qué línea quiere consultar?",
    when: respuesta => respuesta.transporte === "Metro"
  }
];

module.exports = preguntas;
