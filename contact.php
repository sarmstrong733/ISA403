<?php
echo "your data is successfully sent"; 

//add your userid, password and dbname for mysql
$link=mysqli_connect("mysql.fsb.miamioh.edu", "burkeak4", "fsb4mysql", "burkeak4");

//add your db name
$db_selected= mysqli_select_db($link, 'burkeak4');

$value1 =$_POST['name'];   
$value2 =$_POST['email'];
$value3 =$_POST['phone'];
$value4 =$_POST['message'];

$query = "INSERT INTO isa403m4 (name, email, phone, message) VALUES('$value1', '$value2', '$value3', '$value4')";
mysqli_query($link, $query); 

?>