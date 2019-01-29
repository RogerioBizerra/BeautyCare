<?php
 
class DbOperation {
    private $conn;
 
    //Constructor
    function __construct() {
        require_once dirname(__FILE__) . '/Config.php';
        require_once dirname(__FILE__) . '/DbConnect.php';
        // opening db connection
        $db = new DbConnect();
        $this->conn = $db->connect();
    }
 
    //Function to create a new user
    public function createTeam($resposta1, $resposta2, $resposta3, $resposta4, $resposta5, $resposta6, $resposta7, $resposta8, $resposta9, $resposta10, $resposta11, $resposta11a, $resposta12, $resposta12a, $resposta13, $resposta13a, $resposta14, $resposta14a, $resposta15, $resposta15a) {
        $stmt = $this->conn->prepare("INSERT INTO pesquisa(`resposta1`, `resposta2`, `resposta3`, `resposta4`, `resposta5`, `resposta6`, `resposta7`, `resposta8`, `resposta9`, `resposta10`, `resposta11`, `resposta11a`, `resposta12`, `resposta12a`, `resposta13`, `resposta13a`, `resposta14`, `resposta14a`, `resposta15`, `resposta15a`) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssssssssssssssssss", $resposta1, $resposta2, $resposta3, $resposta4, $resposta5, $resposta6, $resposta7, $resposta8, $resposta9, $resposta10, $resposta11, $resposta11a, $resposta12, $resposta12a, $resposta13, $resposta13a, $resposta14, $resposta14a, $resposta15, $resposta15a);
        $result = $stmt->execute();
        $stmt->close();
        if ($result) {
            return true;
        } else {
            return $stmt->error;
        }
    }
 
}
