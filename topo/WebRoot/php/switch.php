<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 4/24/16
 * Time: 8:07 PM
 */

//$ip = $_COOKIE["ip"];
//$port = $_COOKIE["port"];
$commend = "curl http://localhost:8080/wm/topology/c-switches/json";
//$commend = "curl http://192.168.1.224:8080/wm/core/controller/switches/json";
$result = exec($commend);
$jsonResult = json_decode($result,true);
$switchNum = count($jsonResult);
echo $result;
?>