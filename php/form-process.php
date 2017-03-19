<?php

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["email"];
}

// COMPANY
if (!empty($_POST["company"])) {
    $company = $_POST["company"];
}

// TITLE
if (!empty($_POST["title"])) {
    $title = $_POST["title"];
}

// MESSAGE
if (!empty($_POST["message"])) {
    $message = $_POST["message"];
}

// INDUSTRY
if (!empty($_POST["industry"])) {
    $industry = $_POST["industry"];
}

// MENTOR MESSAGE
if (!empty($_POST["mentormessage"])) {
    $mentormessage = $_POST["mentormessage"];
}

// PHONE
if (!empty($_POST["phone"])) {
    $phone = $_POST["phone"];
}

$EmailTo = "tarskaur@gmail.com";
$Subject = "New Message Received";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $phone;
$Body .= "\n";
$Body .= "Subject: ";
$Body .= $msg_subject;
$Body .= "\n";
$Body .= "Company: ";
$Body .= $company;
$Body .= "\n";
$Body .= "Title: ";
$Body .= $title;
$Body .= "\n";
$Body .= "Industry: ";
$Body .= $industry;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";
$Body .= "Mentor Message: ";
$Body .= $mentormessage;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);


// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>