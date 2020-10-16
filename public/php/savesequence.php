<?php
require_once('config.php');

$data = json_decode(file_get_contents('php://input'), true);
if (!$data) die;

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($mysqli->connect_errno) {
    echo "Не удалось подключиться к MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

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

echo (json_encode(true));
