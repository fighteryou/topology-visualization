<?php
//$ip = $_COOKIE["ip"];
//$port = $_COOKIE["port"];
//$commend = "curl http://".$ip.":".$port."/wm/core/controller/switches/json";
$commend = "curl http://localhost:8080/wm/topology/c-switches/json";
$result = exec($commend);
$jsonResult = json_decode($result,true);
$switchNum = count($jsonResult);


for($i = 0; $i <$switchNum; $i++)
{
    echo "<tr>";
    for($j = 0; $j <10; $j++)
        if(count($jsonResult[$i]["switchDPID"][0]["dpid"][$j]) != 0)
            echo "<td>".$jsonResult[$i]["switchDPID"][0]["dpid"][$j]."</td>";
    echo "</tr>";
}
