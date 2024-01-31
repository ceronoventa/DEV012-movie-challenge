//contenedor root
const rootElement = document.getElementById("root");

  //textarea titulo
  const cajaTexto = document.createElement("textarea");
  cajaTexto.placeholder = "Titulo";
  rootElement.appendChild(cajaTexto);

//textarea Año
const cajaYear = document.createElement("textarea");
  cajaYear.placeholder = "Año";
  rootElement.appendChild(cajaYear);

// Boton buscar
const searchButton = document.createElement("button");
searchButton.textContent = "Buscar";
searchButton.addEventListener("click", () => {
  console.log("buscar las pelis");
});
// Obtener el elemento con el id "root" y agrega el botón
rootElement.appendChild(searchButton);

//Boton Limpiar
const resetButton = document.createElement("button");
resetButton.textContent = "Borrar";
resetButton.addEventListener("click", () => {
  console.log("Borrar");
});
rootElement.appendChild(resetButton);




