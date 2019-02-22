<?php

/*
 * conexão com o banco de dados local
*/
/*$servidor = "localhost";
$usuario = "rtpubli";
$senha = "Publicidade_1";
$banco = "firecomf_panasonic";/**/

/*
 * conexão com o banco de dados
*/
$servidor = "localhost";
$usuario = "firecomf_pana";
$senha = ".5zFd4gI5l=x";
$banco = "firecomf_panasonic";/**/


$link = mysqli_connect($servidor, $usuario, $senha, $banco);
mysqli_set_charset( $link, 'utf8');
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

?>