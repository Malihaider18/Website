<?php

$to = $_POST['recipient'];
$subject = $_POST['subject'] . " From: " . $_POST['name'];
$txt = $_POST['msg'];
$headers = "From: " . $_POST['email'] . "\r\n" .
"CC: " . $_POST['email'];

mail($to,$subject,$txt,$headers);

header("Location: http://eve.kean.edu/~haiderma/CPS3500/confirmation.html");
?>
