<?php
require_once('config.php');

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) die;

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($mysqli->connect_errno) {
    echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$res = $mysqli->query("SELECT * FROM sequences WHERE id = " . $data['id'] . " AND user_id IN
    (SELECT id AS user_id FROM users WHERE login = '" . $data['login'] . "' AND password = '" . $data['password'] . "')");

if (!$res) {
    echo "Ошибка: (" . $mysqli->errno . ") " . $mysqli->error;
}

if ($res->num_rows == 0) {
    $answer = false;
} else {
    $mysqli->query("DELETE FROM asanas WHERE block_id IN
        (SELECT id AS block_id FROM blocks WHERE sequence_id = " . $data['id'] . ")");
    $mysqli->query("DELETE FROM blocks WHERE sequence_id = " . $data['id']);
    $mysqli->query("DELETE FROM sequences WHERE id = " . $data['id']);
    $answer = true;
}

echo (json_encode($answer));
