<?php
$data = json_decode(file_get_contents('php://input'), true);
if ($data['email'] == '1') {
    $answer = true;
} else {
    $answer = false;
}
echo (json_encode($answer));
