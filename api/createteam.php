<?php
 
//creating response array
$response = array();
 
if($_SERVER['REQUEST_METHOD']=='POST'){
 
    //getting values
    $campo1 = $_POST['campo1'];
    $campo2 = $_POST['campo2'];
    $campo3 = $_POST['campo3'];
    $campo4 = $_POST['campo4'];
 
    //including the db operation file
    require_once '../includes/DbOperation.php';
 
    $db = new DbOperation();
    
    $sqlinsert = $db->createTeam($campo1, $campo2, $campo3, $campo4);

    //inserting values 
    if($sqlinsert){
        $response['error']=false;
        $response['message']='Team added successfully';
    }else{
 
        $response['error']=true;
        $response['message']='Could not add team';
    }
 
}else{
    $response['error']=true;
    $response['message']='You are not authorized';
}
echo json_encode($response);