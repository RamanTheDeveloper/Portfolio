<?php

if (isset($_POST['submit'])){
  $name = $_POST['name'];
  $mailFrom = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $mailTo = "ramandeep-singh25@outlook.com";
  $subject = $subject;
  $headers = "From: ".$mailFrom;
  $body = "Name: ".$name."\n
          Their e-mail: ".$mailFrom."\n\n
          Messge: \n".$message;

  mail($mailTo, $subject, $body, $headers);
  header("Location: index.html?mailSent");
}
?>
