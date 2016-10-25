<?php
//$ip = $_COOKIE["ip"];
//$port = $_COOKIE["port"];
//$commend = "curl http://".$ip.":".$port."/wm/device/";

$commend = "curl http://localhost:8080/wm/topology/hostmap/json";
$result = exec($commend);
$jsonResult = json_decode($result,false);
$hostNum = count($jsonResult);

echo $result;
?>
