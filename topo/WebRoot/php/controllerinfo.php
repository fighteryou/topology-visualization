<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 5/21/16
 * Time: 2:37 AM
 */

$commend = "curl http://localhost:8080/wm/topology/c-switches/json";
$result = exec($commend);
$jsonResult = json_decode($result,true);
$controllerNum = count($jsonResult);


for($i = 0; $i <$controllerNum; $i++)
{
    for($j = 0; $j <10; $j++)
        if(count($jsonResult[$i]["switchDPID"][0]["dpid"][$j]) != 0) 
        {
            echo "<tr>";
            echo "<td>".$jsonResult[$i]["ControllerIp"][0]."</td>";
            echo "<td>".$jsonResult[$i]["switchDPID"][0]["dpid"][$j]."</td>";
            echo "</tr>";
        }
           
}
