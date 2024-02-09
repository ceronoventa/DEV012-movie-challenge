document.addEventListener("DOMContentLoaded", function() {
// Contenedor root
const rootElement = document.getElementById("root");

// Textarea título
const cajaTexto = document.createElement("textarea");
cajaTexto.placeholder = "Titulo de tu película...";
rootElement.appendChild(cajaTexto);


// Botón buscar
const searchButton = document.createElement("button");
searchButton.textContent = "Buscar";
searchButton.addEventListener("click", () => {
  // Obtener valores de los textareas
  const titulo = cajaTexto.value;


  // Realizar la solicitud a la API de OMDB 
//búsqueda utilizando la api para que el servidor sepa q tenemos acceso
const options = {
  method: 'GET',

};
//se hace la peticion
fetch(`http://www.omdbapi.com/?s=${titulo}&apikey=71b400b3`, options)
//se devuelve la promesa
.then(response => response.json())
.then(response => {
  mostrarResultados(response); // mostrar en interfaz
})
});

// Agregar el botón de búsqueda al contenedor root
rootElement.appendChild(searchButton);

function mostrarResultados(resultados) {
  rootElement.innerHTML = "";
// Verificar si hay resultados
if (resultados.Search && resultados.Search.length > 0) {
  // Iterar sobre los resultados y crear elementos para mostrarlos
  resultados.Search.forEach(pelicula => {
    // Crear un elemento de título para la película
    const tituloPelicula = document.createElement('h2');
    tituloPelicula.textContent = pelicula.Title;
    rootElement.appendChild(tituloPelicula);
  });
} else {
 
  const mensaje = document.createElement('p');  
  mensaje.textContent = 'No se encontraron resultados';
  rootElement.appendChild(mensaje);
}
}

// Botón Limpiar
const resetButton = document.createElement("button");
resetButton.textContent = "Borrar";
resetButton.addEventListener("click", () => {
  limpiarTextArea();
});
rootElement.appendChild(resetButton);

function limpiarTextArea() {
  cajaTexto.value = "";
}
});