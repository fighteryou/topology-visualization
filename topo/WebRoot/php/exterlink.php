<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 5/22/16
 * Time: 5:25 AM
 */
$commend = "curl http://localhost:8080/wm/topology/boundarylink/json";
//$commend = "curl http://192.168.1.224:8080/wm/core/controller/switches/json";
$result = exec($commend);
$jsonResult = json_decode($result,true);
echo $result;
?>