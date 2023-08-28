function checkForm(form){
    console.log("entre");
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (form.name.value == "") {
        document.getElementById("errorName").innerHTML = "*el nombre es obligatorio";
        form.name.focus();
        return false;
    }else{
        document.getElementById("errorName").innerHTML = "";
    }

    /*Check Phone*/
    if (form.phone.value == "") {
        document.getElementById("errorPhone").innerHTML = "*el teléfono es obligatorio";
        form.phone.focus();
        return false;
    }else{
        document.getElementById("errorPhone").innerHTML = "";
    }

    /*Check Email*/
    if (!re.test(form.email.value)) {
        document.getElementById("errorEmail").innerHTML = "*email invalido";
        form.email.focus();
        return false;
    }else{
        document.getElementById("errorEmail").innerHTML = "";
    }

    /*Check description*/
    if (form.comment.value == "") {
        document.getElementById("errorComment").innerHTML = "*Es obligatorio escribir un comentario";
        form.comment.focus();
        return false;
    }else{
        document.getElementById("errorComment").innerHTML = "";
    }

    // alert("¡Felicidades el formulario fue enviado con éxito!");
    alert("El formulario se encuentra desactivado");
    return false;
}