<?php
// connect database
$conn = mysqli_connect("localhost", "root", "", "db_penjualan");

function query($query) {
    global $conn;
    $result = mysqli_query($conn, $query);
    $rows = [];
    while( $row = mysqli_fetch_assoc($result) ) {
        $rows[] = $row;
    }
    return $rows;
}

function insert($data_user) {
    global $conn;
    $username = htmlspecialchars($data_user["username"]);
    $email = htmlspecialchars($data_user["email"]);
    $message = htmlspecialchars($data_user["message"]);


     $query = "INSERT INTO data_contacts
     VALUES
     ('', '$username', '$email', '$message') 
     ";
     mysqli_query($conn, $query);

     return mysqli_affected_rows($conn);

}


function delete ($id) {
    global $conn;
    mysqli_query($conn, "DELETE FROM data_contacts WHERE id = $id");
    return mysqli_affected_rows($conn);
}


?>