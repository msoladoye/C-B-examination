<?php
    $dbhost = 'localhost';
    $dbuser = 'root';
    $dbpass = '';
    $dbname = 'cbtexamination';
    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname) or die('unable to connect now retry later'.mysqli_error_list($conn));
    //echo'connected';
    //require_once 'dataconn.php';
    