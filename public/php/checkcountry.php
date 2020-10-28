<?php
require_once('config.php');
require_once('sxgeo/SxGeo.php');

$ip = $_SERVER['REMOTE_ADDR'];
$SxGeo = new SxGeo('sxgeo/SxGeo.dat');
$country = $SxGeo->getCountry($ip);

echo (json_encode($country == 'RU' ? 'ru' : 'en'));
