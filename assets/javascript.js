const nuevaTarea = document.querySelector("#nuevaTarea");
const agregarTarea = document.querySelector("#agregarTarea");
const infoTareas = document.querySelector("#listaTarea");
const tareasPendientes = document.querySelector("#tareaPendientes");
const tareasCompletadas = document.querySelector("#tareaCompletadas");

let tareas = [
    { id: 1, name: "estudiar", completed: false },
    { id: 2, name: "trabajar", completed: false },
    { id: 3, name: "cocinar", completed: false }
];

let tareaID = 4; // ID inicial para nuevas tareas

agregarTarea.addEventListener("click", function() {
    const nombreTarea = nuevaTarea.value;
    if (nombreTarea.trim() !== "") {//solo lo ejecutara si es diferente a un string vacii
        tareas.push({ id: tareaID+=1, name: nombreTarea, completed: false });
        nuevaTarea.value = "";
        renderizarTareas();
    }
});

function renderizarTareas() {
    let html = "";
    let pendientes = 0;
    let completadas = 0;

    for (let tarea of tareas) {
        html += `<li>
                    ${tarea.id} - ${tarea.name}
                    <input type="checkbox" onclick="cambiarStatusTarea(${tarea.id})" ${tarea.completada ? "checked" : ""}>
                    <button onclick="borrarTarea(${tarea.id})">x</button>
                 </li>`;

        if (tarea.completada) {
            completadas+=1;
        } else {
            pendientes+=1; 
        }
    }

    infoTareas.innerHTML = html;
    tareasPendientes.textContent = `Tareas pendientes: ${pendientes}`;
    tareasCompletadas.textContent = `Tareas realizadas: ${completadas}`;
}

function cambiarStatusTarea(id) {
    const tarea = tareas.find(tarea => tarea.id === id);
    if (tarea) {
        tarea.completada = !tarea.completada;
        renderizarTareas();
    }
}

function borrarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
    renderizarTareas();
}

// Renderizar las tareas iniciales al cargar la página
renderizarTareas();

