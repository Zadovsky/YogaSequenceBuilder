<?php
require_once('config.php');

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) die;

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($mysqli->connect_errno) {
    echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

//check
$check = $mysqli->query("SELECT * FROM sequences WHERE id = " . $data['id'] . " AND user_id IN
    (SELECT id AS user_id FROM users WHERE login = '" . $data['login'] . "' AND password = '" . $data['password'] . "')");

if (!$check) {
    echo "Ошибка: (" . $mysqli->errno . ") " . $mysqli->error;
}

if ($check->num_rows == 0) {
    $answer = false;
} else {
    $gridKey = 0;
    $cardKey = 0;
    $blocks = $mysqli->query("SELECT id, name FROM blocks WHERE sequence_id = " . $data['id'] . " ORDER BY id");
    while (($block = $blocks->fetch_assoc()) != NULL) {
        $gridCards = array();
        $asanas = $mysqli->query("SELECT asana_id FROM asanas WHERE block_id = " . $block['id'] . " ORDER BY id");
        while (($asana = $asanas->fetch_assoc()) != NULL) {
            $gridItem['asanaIndex'] = $asana['asana_id'];
            $gridItem['cardKey'] = $cardKey;
            $gridCards[] = $gridItem;
            $cardKey++;
        }

        $cardItem['gridCards'] = $gridCards;
        $cardItem['gridKey'] = $gridKey;
        $cardItem['gridName'] = $block['name'];
        $cards[] = $cardItem;
        $gridKey++;
    }
    $answer['cards'] = $cards;
    $answer['gridKey'] = $gridKey;
    $answer['cardKey'] = $cardKey;
}

echo (json_encode($answer));
