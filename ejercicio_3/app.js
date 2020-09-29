const obtenerPokemon = require("./library");

// Codigo funcion callback

function Pokemon(data){
console.log("Nombre: " + data.name);
console.log("Habilidades: ")
data.abilities.forEach(i => console.log(i.ability.name));
}

//function Pokemon(pokemonData) {
  //  console.log("Nombre: " + pokemonData.forms[0].name);
    //console.log("Habilidades: ");
    //pokemonData.abilities.forEach(ability => console.log(ability.ability.name));
//}
// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon("charizard",Pokemon);
