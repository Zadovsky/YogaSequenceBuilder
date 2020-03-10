<?php
require_once('config.php');

$data = json_decode(file_get_contents('php://input'), true);

$answer['email'] = $data['email'];
$answer['password'] = $data['password'];

echo (json_encode($answer));
