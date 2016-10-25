<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 5/22/16
 * Time: 5:30 AM
 */
$commend = "curl http://localhost:8080/wm/topology/c-switches/json";
$result = exec($commend);
$jsonResult = json_decode($result,false);
$hostNum = count($jsonResult);
echo $result;
?>
