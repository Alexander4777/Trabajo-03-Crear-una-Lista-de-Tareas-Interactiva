let lista = []
let i = 0;

let agregar = () => {
    let tarea = document.getElementById("nuevaTarea");
    if (tarea.value == "") { alert("Tarea vacia"); return }
    let list = document.getElementById("lista");
    const eliminar = '<input type="button" value="Eliminar" onclick="eliminar(';
    list.innerHTML += "<li class=\"tarea\" id=\"tarea" + i + "\" onclick=\"this.setAttribute('class','completado')\">" + tarea.value + eliminar + "'tarea" + i + "')\"></li>";
    lista.push(tarea.value);
    i++
}

let eliminar = (_tarea) => {
    let tarea = document.getElementById(_tarea)
    tarea.remove()
}
const obtenerTareas = async () => {
    const response = await fetch('http://localhost:3000/tareas');
    const data = await response.json();
    data.tareas.forEach((tarea) => agregarTareaALista(tarea));
};
document.addEventListener('DOMContentLoaded', obtenerTareas);