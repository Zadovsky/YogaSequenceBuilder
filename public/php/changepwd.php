<?php
require_once('config.php');

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) die;

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($mysqli->connect_errno) {
    echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$newPwd = generate_password(8);
$res = $mysqli->query("UPDATE users SET password = '" . $newPwd . "' WHERE login = '" . $data['email'] . "' AND password = '" . $data['password'] . "'");

if (!$res) {
    echo "Ошибка: (" . $mysqli->errno . ") " . $mysqli->error;
}

echo (json_encode($newPwd));

function generate_password($number)
{
    $arr = array(
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'r', 's',
        't', 'u', 'v', 'x', 'y', 'z',
        '1', '2', '3', '4', '5', '6',
        '7', '8', '9', '0'
    );
    // Генерируем пароль
    $pass = "";
    for ($i = 0; $i < $number; $i++) {
        // Вычисляем случайный индекс массива
        $index = rand(0, count($arr) - 1);
        $pass .= $arr[$index];
    }
    return $pass;
}
