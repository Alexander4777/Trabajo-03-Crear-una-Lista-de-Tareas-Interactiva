let lista = []
let i = 0;

let agregar = () => {
    let tarea = document.getElementById("nuevaTarea");
    if (tarea.value == "") {alert("Tarea vacia"); return}
    let list = document.getElementById("lista");
    const eliminar = '<input type="button" value="Eliminar" onclick="eliminar(';
    list.innerHTML += "<li class=\"tarea\" id=\"tarea" + i + "\" onclick=\"this.setAttribute('class','completado')\">" + tarea.value + eliminar + "'tarea" + i +"')\"></li>";
    lista.push(tarea.value);
    i++
}

let eliminar = (_tarea) => {
    let tarea = document.getElementById(_tarea)
    tarea.remove()
}