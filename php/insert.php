<?php

require_once('config.php');

if($_POST){

    //getting values
    $resposta1      = $_POST['resposta1'];
    $resposta2      = $_POST['resposta2'];
    $resposta3      = $_POST['resposta3'];
    $resposta4      = $_POST['resposta4'];
    $resposta5      = $_POST['resposta5'];
    $resposta6      = $_POST['resposta6'];
    $resposta7      = $_POST['resposta7'];
    $resposta8      = $_POST['resposta8'];
    $resposta9      = $_POST['resposta9'];
    $resposta10     = $_POST['resposta10'];
    $resposta11     = $_POST['resposta11'];
    $resposta11a    = $_POST['resposta11a'];
    $resposta12     = $_POST['resposta12'];
    $resposta12a    = $_POST['resposta12a'];
    $resposta13     = $_POST['resposta13'];
    $resposta13a    = $_POST['resposta13a'];
    $resposta14     = $_POST['resposta14'];
    $resposta14a    = $_POST['resposta14a'];
    $resposta15     = $_POST['resposta15'];
    $resposta15a    = $_POST['resposta15a'];

    $sql_insert = ("INSERT INTO pesquisa(`resposta1`, `resposta2`, `resposta3`, `resposta4`, `resposta5`, `resposta6`, `resposta7`, `resposta8`, `resposta9`, `resposta10`, `resposta11`, `resposta11a`, `resposta12`, `resposta12a`, `resposta13`, `resposta13a`, `resposta14`, `resposta14a`, `resposta15`, `resposta15a`) VALUES ('$resposta1', '$resposta2', '$resposta3', '$resposta4', '$resposta5', '$resposta6', '$resposta7', '$resposta8', '$resposta9', '$resposta10', '$resposta11', '$resposta11a', '$resposta12', '$resposta12a', '$resposta13', '$resposta13a', '$resposta14', '$resposta14a', '$resposta15', '$resposta15a')");

    $result_insert = mysqli_query($link, $sql_insert);/**/

    if ($result_insert) {
        $response_array['status'] = "success";
        header('Content-type: application/json');
        echo json_encode($response_array);
    } else {
        $response_array['status'] = $sql_insert;
        header('Content-type: application/json');
        echo json_encode($response_array);
    }/**/

    mysqli_close($link);

}
?>