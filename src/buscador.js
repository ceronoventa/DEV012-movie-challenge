//contenedor root
const rootElement = document.getElementById("root");


// Input API Key
const inputApi = document.createElement("input");
inputApi.type = "text";
inputApi.placeholder = "Introduce tu API Key";
rootElement.appendChild(inputApi);

//Boton Apikey
const api = document.createElement("button");
api.textContent = "Ingresar";
api.addEventListener("click", () => {
  const userApi = inputApi.value;
if (userApi === "") {
  alert ("Debes ingresar tu ApiKey");
} else {
  localStorage.setItem("KEY", userApi);
  alert ("¡Cool! Ahora puedes explorar las pelis");
}
});
rootElement.appendChild(api);

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


  