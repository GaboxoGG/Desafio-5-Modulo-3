let tareas = [
    {id: 1,tarea: "Hacer Mercado", realizada: false},
    {id: 2,tarea: "Estudiar para la Prueba", realizada: false},
    {id: 3,tarea: "Sacar a pasear a Tobby",realizada: false}  
]

const tareaList = document.getElementById("ListaTareas");
const renderList = () => {
    const cantTareas = document.getElementById("CantidadTareas");
    cantTareas.innerHTML = tareas.length;

    const cantRealizadas = document.getElementById("TareasRealizadas");
    const realizadas = tareas.filter(tarea => tarea.realizada).length;
    cantRealizadas.innerHTML = realizadas;
    
    let template = "";
    for (let lista of tareas) {
        template += `
        <li class="list-group-item d-flex justify-content-between align-items-center"><span>${lista.id} - ${lista.tarea}</span>
        <div>
            <input class="form-check-input me-2" type="checkbox" onclick="modificarEstado(${lista.id})" ${lista.realizada ? "checked" : ""}>
            <button class="btn btn-danger btn-sm" onclick="borrarTarea(${lista.id})">Eliminar</button>
        </div>
        </li>
        `;
    }
    tareaList.innerHTML = template;
}

const modificarEstado = (id) => {
    const indiceTareaModificar = tareas.findIndex(el => el.id == id);
    if (indiceTareaModificar === -1) return;
    tareas[indiceTareaModificar].realizada = !tareas[indiceTareaModificar].realizada;
    if (tareas[indiceTareaModificar].realizada) {
        alert("Excelente Completaste: " + tareas[indiceTareaModificar].tarea);
    }
    renderList();
}
 
const borrarTarea = (id) => {
    const indiceTareaModificar = tareas.findIndex(el => el.id == id)
    tareas.splice(indiceTareaModificar, 1)
    renderList();
}

renderList()

const newTarea = document.getElementById("TareaNueva");
const addTarea = document.getElementById("AgregarTarea");

addTarea.addEventListener("click", () => {
    if (newTarea.value.trim() === "") return;
    let nuevaTarea = {
        id: tareas.length + 1,
        tarea: newTarea.value,
        realizada: false,
    }
    tareas.push(nuevaTarea);
    renderList();
    newTarea.value = "";
})

