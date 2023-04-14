let tabla = [
    { id: "0890", nombre: "Carlos", apellido: "Bacca", ciudad: "Puerto Colombia", edad: "36" },
    { id: "9112", nombre: "Juan", apellido: "Quintero", ciudad: "Medellin", edad: "30" },
    { id: "1894", nombre: "Mario", apellido: "Viera", ciudad: "Florida", edad: "40" }
]

function cargar() {
    let elemento = document.getElementById("usuarios")
    tablallena = ""
    for (let i = 0; i < tabla.length; i++) {
        tablallena = tablallena + ` <tr><td>${tabla[i].id}</td><td>${tabla[i].nombre}</td><td>${tabla[i].apellido}</td><td>${tabla[i].ciudad}</td><td>${tabla[i].edad}</td></tr>`
    }
    elemento.innerHTML = tablallena
}

function usuarionuevo() {
    let id = document.getElementById("id").value
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let ciudad = document.getElementById("ciudad").value
    let edad = document.getElementById("edad").value

    if (form.id.value == "") {
        alert("El campo 'cédula' está vacio");
        return false;
    }
    for (let i = 0; i < tabla.length; i++) {
        form.id.value == tabla[i].id
        if (form.id.value == tabla[i].id) {
            alert("La 'cédula' ingresada ya existe");
            return false;
        }
    }
    if (isNaN(form.id.value)) {
        alert("La 'cédula' ingresada no es un valor numérico");
        return true;
    }
    if (form.nombre.value == "") {
        alert("El campo 'nombre' está vacio");
        return false;
    }
    if (form.apellido.value == "") {
        alert("El campo 'apellido' está vacio");
        return false;
    }
    if (form.ciudad.value == "") {
        alert("El campo 'ciudad' está vacio");
        return false;
    }
    if (form.edad.value == "") {
        alert("El campo 'edad' está vacio");
        return false;
    }
    if (isNaN(form.edad.value)) {
        alert("La 'edad' ingresada no es un valor númerico");
        return true;
    }
    let elemento = document.getElementById("usuarios")
    elemento.innerHTML += `<tr><td>${id}</td><td>${nombre}</td><td>${apellido}</td><td>${ciudad}</td><td>${edad}</td></tr>`

    let usertabla = { id, nombre, apellido, ciudad, edad }
    tabla.push(usertabla)

    alert('Ha sido añadido un nuevo usuario')
}