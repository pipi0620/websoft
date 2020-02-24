<?php

// Enable verbose output of error (or include from config.php)
error_reporting(-1);              // Report all type of errors
ini_set("display_errors", 1);     // Display all errors

// Create an array with the connection details
$dsn = [
    "dsn"       => "mysql:host=127.0.0.1;port=13306;dbname=websoft;charset=UTF8",
    "username"  => "user",
    "password"  => "pass",
];