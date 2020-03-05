<?php
$data = json_decode(file_get_contents('php://input'), true);
$mysqli = new mysqli("localhost", "root", "", "ysb");

if ($mysqli->connect_errno) {
    echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$res = $mysqli->query("SELECT * FROM users WHERE login = '" . $data['email'] . "' AND password = '" . $data['password'] . "'");

if (!$res) {
    echo "Ошибка: (" . $mysqli->errno . ") " . $mysqli->error;
}

if ($res->num_rows == 0) {
    $answer = false;
} else {
    $answer = true;
}

echo (json_encode($answer));
