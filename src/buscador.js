//contenedor root
const rootElement = document.getElementById("root");

// Boton buscar
const searchButton = document.createElement("button");
searchButton.textContent = "Buscar";
searchButton.addEventListener("click", () => {
  console.log("buscar las pelis");
});

// Obtener el elemento con el id "root" y agrega el botón
rootElement.appendChild(searchButton);

  //textarea
  const cajaTexto = document.createElement("textarea");
  cajaTexto.placeholder = "Ingresa una película...";
  // Agregar la caja de texto al elemento con id "root"
  rootElement.appendChild(cajaTexto);
  //cuando se ejecute la f router
