<?php
require_once('config.php');
require_once('phpmailer/phpmailer.php');
require_once('phpmailer/smtp.php');
require_once('phpmailer/exception.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

date_default_timezone_set('Etc/UTC');

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) die;

$email = $data['email'];
$subj = $data['subj'];
$text = $data['text'];

$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host = "smtp.mail.ru";
    $mail->SMTPAuth = true;
    $mail->Username = "vlad@yogasequencebuilder.online";
    $mail->Password = "pXtI3R?jQ8ls";
    $mail->SMTPSecure = "ssl";
    $mail->Port = 465;
    $mail->setFrom("vlad@yogasequencebuilder.online"); // Ваш Email
    $mail->addAddress($email); // Email получателя

    // Письмо
    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = '=?UTF-8?B?' . base64_encode($subj) . '?='; // Заголовок письма
    $mail->Body = $text; // Текст письма

    // Результат
    $mail->send();
} catch (Exception $e) {
    file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/debug.txt', $mail->ErrorInfo);
}

echo (json_encode(true));
