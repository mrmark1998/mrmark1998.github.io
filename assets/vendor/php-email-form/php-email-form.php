<?php
$to = 'mikemark@umich.edu';
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS);
$from = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_SPECIAL_CHARS);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS);

if (filter_var($from, FILTER_VALIDATE_EMAIL)) {
    $headers = ['From' => ($name?"<$name> ":'').$from,
            'X-Mailer' => 'PHP/' . phpversion()
           ];

    mail($to, $subject, $message."\r\n\r\nfrom: ".$_SERVER['REMOTE_ADDR'], $headers);
    die('OK');
    
} else {
    die('Invalid address');
}
?>