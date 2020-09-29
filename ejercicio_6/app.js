const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then(Data => {
    Data.results.forEach(person => {
        console.log("Nombre " + person.name.first + " Apellido " + person.name.last);
        console.log("Genero " + person.gender);
        console.log("ciudad " + person.location.city + " Pais " + person.location.country + " Estado " + person.location.state + " Calle " + person.location.name + " Numero " + person.location.street.number + " CP " + person.location.postcode);
        console.log("Coordenadas: " + person.location.coordinates.latitude + " " + person.location.coordinates.longitude);
        console.log("Mail: " + person.email);
        console.log("Username: " + person.login.username + " Contraseña: " + person.login.password);
        console.log("Telefono: " + person.phone + " Celular: " + person.cell);
    });
    
});
