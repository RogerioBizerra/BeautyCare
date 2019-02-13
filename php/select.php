<?php

require_once('config.php');

if($_POST){
    
    $status = $_POST['status'];

    $sql_select_count_registros = "SELECT * FROM `pesquisa` WHERE `status` = $status";

    $result_count_registros = mysqli_query($link, $sql_select_count_registros);

    if($result_count_registros){
        $response_count['status'] = mysqli_num_rows($result_count_registros);
    }

    mysqli_close($link);

    header('Content-type: application/json');
    echo json_encode($response_count);
}
?>