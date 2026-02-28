// Obtener elementos del DOM
const formulario = document.getElementById('form');
const inputTarea = document.getElementById('tarea');
const lista = document.getElementById('lista');
const contador = document.getElementById('contador');

// Variable para llevar el conteo de las tareas
let tareasPendientes = 0;

// Función para actualizar el contador de tareas
function actualizarContador() {
  contador.textContent = tareasPendientes;
}

// Función para eliminar una tarea
function eliminarTarea(event) {
  // Eliminar el elemento de la lista
  event.target.parentElement.remove();
  
  // Disminuir el contador de tareas
  tareasPendientes--;
  actualizarContador();
}

// Función para agregar una nueva tarea
function agregarTarea(event) {
  event.preventDefault(); // Evitar que el formulario recargue la página
  
  const tareaTexto = inputTarea.value.trim();
  
  if (tareaTexto === "") {
    alert("Por favor ingrese una tarea");
    return;
  }

  // Crear el nuevo elemento de lista
  const li = document.createElement('li');
  li.textContent = tareaTexto;

  // Crear el botón de eliminar
  const btnEliminar = document.createElement('button');
  btnEliminar.textContent = "Eliminar";
  btnEliminar.classList.add('eliminar');
  btnEliminar.addEventListener('click', eliminarTarea);

  // Añadir el botón de eliminar a la tarea
  li.appendChild(btnEliminar);
  
  // Añadir la tarea a la lista
  lista.appendChild(li);

  // Limpiar el input de tarea y actualizar contador
  inputTarea.value = "";
  tareasPendientes++;
  actualizarContador();
}

// Agregar tarea al hacer submit en el formulario
formulario.addEventListener('submit', agregarTarea);