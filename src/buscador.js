document.addEventListener("DOMContentLoaded", function () {
  // Contenedor root obteniendo el elemento con el ID
  const rootElement = document.getElementById("root");

  // Contenedor para parrafo textarea y botones
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container"); // Agrega clase para estilos en css
  

  const bienvenida = document.createElement("p");
bienvenida.textContent = "Bienvenidos! Para comenzar ingresa tu búsqueda a continuación:";
inputContainer.appendChild(bienvenida);

  // Textarea título
  const cajaTexto = document.createElement("textarea");
  cajaTexto.placeholder = "Titulo de tu película...";
  inputContainer.appendChild(cajaTexto);

  // Botón buscar
  const searchButton = document.createElement("button");
  searchButton.textContent = "Buscar";
  searchButton.addEventListener("click", () => {
    // Obtener valores de los textareas
    const titulo = cajaTexto.value;
    // Realizar la solicitud a la API de OMDB
    //búsqueda utilizando la api para que el servidor sepa q tenemos acceso
    const options = {
      method: "GET",
    };

    fetch(`http://www.omdbapi.com/?s=${titulo}&apikey=71b400b3`, options) //se hace la peticion
      .then((response) => response.json()) //se devuelve la promesa
      .then((response) => {
        mostrarResultados(response); // mostrar en interfaz
      });
  });
  inputContainer.appendChild(searchButton); // Agregar el botón de búsqueda al contenedor de los input

 
    // Botón Limpiar
    const resetButton = document.createElement("button");
    resetButton.textContent = "Borrar";
    resetButton.addEventListener("click", () => {
      limpiarTextArea();
    });
    inputContainer.appendChild(resetButton);
    
    function limpiarTextArea() {
      cajaTexto.value = "";
    }
 
 

  rootElement.appendChild(inputContainer); // Agregar el contenedor de textarea y botones al contenedor rootElement
  
  function mostrarResultados(resultados) {
    rootElement.innerHTML = "";

    if (resultados.Search && resultados.Search.length > 0) {
      // Verificar si hay resultados

      resultados.Search.forEach((pelicula) => {
        // Iterar sobre los resultados y crear elementos para mostrarlos

        //crear div que encapsula
        const contengaTodo = document.createElement("div");

        // Crear un elemento de título para la película
        const tituloPelicula = document.createElement("h2");
        tituloPelicula.textContent = pelicula.Title;
        contengaTodo.appendChild(tituloPelicula);
        //elemento para año
        const yearPelicula = document.createElement("p");
        yearPelicula.textContent = pelicula.Year;
        contengaTodo.appendChild(yearPelicula);

        //elemento para poster
        const posterPelicula = document.createElement("img");
        posterPelicula.src = pelicula.Poster;
        contengaTodo.appendChild(posterPelicula);

                  // Botón Home
const botonHome = document.createElement('button');
botonHome.textContent = "Home";
inputContainer.appendChild(botonHome);


        // Agregar el contenedor principal al rootElement
        rootElement.appendChild(contengaTodo);

      });
  
        
          
      
    } else {
      const mensaje = document.createElement("p");
      mensaje.textContent = "No se encontraron resultados";
      rootElement.appendChild(mensaje);
    }
  }
});
