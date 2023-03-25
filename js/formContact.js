function checkForm(form){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (form.nombre.value == "") {
        document.getElementById("nombreErroneo").innerHTML = "*el nombre es obligatorio";
        formulario.email.focus();
        return false;
    }else{
        document.getElementById("nombreErroneo").innerHTML = "";
    }

    /*Check Phone*/
    if (form.telefono.value == "") {
        document.getElementById("telefonoErroneo").innerHTML = "*el telefono es obligatorio";
        formulario.email.focus();
        return false;
    }else{
        document.getElementById("telefonoErroneo").innerHTML = "";
    }

    /*Check Email*/
    if (!re.test(form.correo.value)) {
        document.getElementById("correoErroneo").innerHTML = "*email invalido";
        formulario.email.focus();
        return false;
    }else{
        document.getElementById("correoErroneo").innerHTML = "";
    }

    /*Check description*/
    if (form.comentario.value == "") {
        document.getElementById("comentarioErroneo").innerHTML = "*Es obligatorio escribir un comentario";
        formulario.email.focus();
        return false;
    }else{
        document.getElementById("comentarioErroneo").innerHTML = "";
    }

    alert("¡Felizidades el formulario fue enviado con exito!");
    return true;
}
