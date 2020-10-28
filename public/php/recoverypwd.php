<?php
require_once('config.php');
require_once('phpmailer/phpmailer.php');
require_once('phpmailer/smtp.php');
require_once('phpmailer/exception.php');

use PHPMailer\PHPMailer\PHPMailer;

date_default_timezone_set('Etc/UTC');

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) die;

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($mysqli->connect_errno) {
    echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$res = $mysqli->query("SELECT * FROM users WHERE login = '" . $data['email'] . "'");

if (!$res) {
    echo "Ошибка: (" . $mysqli->errno . ") " . $mysqli->error;
}

if ($res->num_rows == 0) {
    $answer = false;
} else {
    $userData = $res->fetch_assoc();

    $email = $userData['login'];
    $subj = 'Password to YogaSequenceBuilder.online account';
    $text = 'Hello! <br> There is your password: ' . $userData['password'] . '<br> Have a good practice!';

    $mail = new PHPMailer(true);

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

    $answer = true;
}

echo (json_encode($answer));
