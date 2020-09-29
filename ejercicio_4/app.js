const obtenerPokemon = require("./library");

// Usar la funcion obtenerChiste(nombrePokemon) la cual recibe como string un nombre de pokemon y devuelve la promesa de traer el objeto pokemon extraido
obtenerPokemon("charizard").then(data => {
    console.log("Nombre: " + data.name);
    console.log("Habilidades: ")
    data.abilities.forEach(i => console.log(i.ability.name));
});
