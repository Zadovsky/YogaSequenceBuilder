<?php
require_once('config.php');

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) die;

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($mysqli->connect_errno) {
    echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

//check
$res = $mysqli->query("SELECT * FROM sequences WHERE id = " . $data['id'] . " AND user_id IN
    (SELECT id AS user_id FROM users WHERE login = '" . $data['login'] . "' AND password = '" . $data['password'] . "')");

if (!$res) {
    echo "Ошибка: (" . $mysqli->errno . ") " . $mysqli->error;
}

if ($res->num_rows == 0) {
    $answer = false;
} else {
    //delete
    $mysqli->query("DELETE FROM asanas WHERE block_id IN
        (SELECT id AS block_id FROM blocks WHERE sequence_id = " . $data['id'] . ")");
    $mysqli->query("DELETE FROM blocks WHERE sequence_id = " . $data['id']);
    $mysqli->query("DELETE FROM sequences WHERE id = " . $data['id']);

    //insert
    $mysqli->query("INSERT INTO sequences(user_id, name, time) SELECT id AS user_id, '" . $data['seqName'] . "', '" . $data['dateTime'] . "' FROM users WHERE login = '" . $data['login'] . "' AND password = '" . $data['password'] . "'");

    $seqid = $mysqli->insert_id;
    $blocksnum = count($data['sequence']);

    for ($i = 0; $i < $blocksnum; $i++) {
        $blockname = ($data['sequence'][$i]['gridName'] == null ? 'NULL' : "'" . $data['sequence'][$i]['gridName'] . "'");
        $mysqli->query("INSERT INTO blocks(sequence_id, name) VALUES (" . $seqid . ", " . $blockname . ")");

        $blockid = $mysqli->insert_id;
        $asanasnum = count($data['sequence'][$i]['gridCards']);

        for ($k = 0; $k < $asanasnum; $k++) {
            $mysqli->query("INSERT INTO asanas(block_id, asana_id) VALUES (" . $blockid . ", " . $data['sequence'][$i]['gridCards'][$k]['asanaIndex'] . ")");
        }
    }

    $answer = true;
}

echo (json_encode($answer));
