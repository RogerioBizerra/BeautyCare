<?php
 
//creating response array
$response = array();
 
if($_SERVER['REQUEST_METHOD']=='POST'){
 
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
 
    //including the db operation file
    require_once '../includes/DbOperation.php';
 
    $db = new DbOperation();
    
    $sqlinsert = $db->createTeam($resposta1, $resposta2, $resposta3, $resposta4, $resposta5, $resposta6, $resposta7, $resposta8, $resposta9, $resposta10, $resposta11, $resposta11a, $resposta12, $resposta12a, $resposta13, $resposta13a, $resposta14, $resposta14a, $resposta15, $resposta15a);

    //inserting values 
    if($sqlinsert){
        $response['error']=false;
        $response['data']='success';
    }else{
 
        $response['error']=true;
        $response['data']='error';
    }
 
}else{
    $response['error']=true;
    $response['data']='error';
}
echo json_encode($response);