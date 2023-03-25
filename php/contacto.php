<?php
	$destino = "pabonlopezsebastian@gmail.com";
	$nombre = $_POST["nombre"];
	$email = $_POST["correo"];
	$telefono = $_POST["telefono"];
	$comentario = $_POST["comentario"];
	$contenido = "Nombre: " . $nombre . "\nCorreo: " . $email ."\nTelefono: " . $telefono . "\ncomentario" . $comentario;
	// mail($destino, "Petición de información", $contenido);
	header("Location:../index.html");
?>