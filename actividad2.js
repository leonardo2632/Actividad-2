var arrays = [
  {
    aseguradora: "AFIRM",
    cotizacion: {
      cliente: {
        tipoPersona: "fisica",
        nombre: "Erick",
        apellidoPat: "Mendoza",
        apellidoMat: "Garcia",
        rfc: "",
        fechaNacimiento: "01-01-2005",
        ocupacion: "",
        curp: "",
        edad: "18",
        genero: "MASCULINO",
        telefono: "578787",
        email: "",

        direccion: {
          calle: "oriente 945",
          noExt: "410",
          noInt: "021",
          colonia: "cardenas",
          codPostal: "56618",
          poblacion: "mexico",
          ciudad: "cdmx",
          pais: "mexico",
        },
      },
    },
  },

  //segundo arreglo
  [
    {
      aseguradora: "Ford",
      cotizacion: {
        cliente: {
          tipoPersona: "Moral",
          nombre: "Ana",
          apellidoPat: "Hernandez",
          apellidoMat: "Paredes",
          rfc: "",
          fechaNacimiento: "08-09-2001",
          ocupacion: "",
          curp: "",
          edad: "20",
          genero: "femenino",
          telefono: "",
          email: "",

          direccion: {
            calle: "sur 945",
            noExt: "475",
            noInt: "142",
            colonia: "benito juarez",
            codPostal: "552369",
            poblacion: "mexico",
            ciudad: "puebla",
            pais: "mexico",
          },
        },
      },
    },
  ],
];

//console.log(array);
arrays.forEach(a => {
    console.log(a);
});

/*const{calle = "www"} = direccion;
console.log(`calle: ${calle}` );*/
