<?php
 
class DbOperation
{
    private $conn;
 
    //Constructor
    function __construct()
    {
        require_once dirname(__FILE__) . '/Config.php';
        require_once dirname(__FILE__) . '/DbConnect.php';
        // opening db connection
        $db = new DbConnect();
        $this->conn = $db->connect();
    }
 
    //Function to create a new user
    public function createTeam($campo1, $campo2, $campo3, $campo4)
    {
        $stmt = $this->conn->prepare("INSERT INTO teste(`campo1`, `campo2`, `campo3`, `campo4`) values(?, ?, ?, ?)");
        $stmt->bind_param("ssss", $campo1, $campo2, $campo3, $campo4);
        $result = $stmt->execute();
        $stmt->close();
        if ($result) {
            return true;
        } else {
            return $stmt->error;
        }
    }
 
}
