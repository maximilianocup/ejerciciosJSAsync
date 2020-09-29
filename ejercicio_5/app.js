
const obtenerPersonaFake = require("./library");

// Codigo funcion callback

function Persona(Data){
    Data.results.forEach(person => {
        console.log("Nombre " + person.name.first + " Apellido " + person.name.last);
        console.log("Genero " + person.gender);
        console.log("ciudad " + person.location.city + " Pais " + person.location.country + " Estado " + person.location.state + " Calle " + person.location.name + " Numero " + person.location.street.number + " CP " + person.location.postcode);
        console.log("Coordenadas: " + person.location.coordinates.latitude + " " + person.location.coordinates.longitude);
        console.log("Mail: " + person.email);
        console.log("Username: " + person.login.username + " Contraseña: " + person.login.password);
        console.log("Telefono: " + person.phone + " Celular: " + person.cell);
    });
}

// Fin codigo

// Usar la funcion obtenerPersonaFake(funcionCallback) en donde funcionCallback es una función que recibe el objeto persona extraido
obtenerPersonaFake(Persona);
