<?php
//$ip = $_COOKIE["ip"];
//$port = $_COOKIE["port"];
//$commend = "curl http://".$ip.":".$port."/wm/device/";

$commend = "curl http://localhost:8080/wm/topology/hostmap/json";
$result = exec($commend);
$jsonResult = json_decode($result,true);
$hostNum = count($jsonResult);


for($i = 0; $i <$hostNum; $i++)
{
    if(count($jsonResult[$i]["ipv4"]) != 0)
    {
        echo "<tr>";
        echo "<td><a>".$jsonResult[$i]["mac"][0]."</a></td>";
        echo "<td>".$jsonResult[$i]["ipv4"][0]."</td>";
        echo "<td>".$jsonResult[$i]["attachmentPoint"][0]["switchDPID"]."</td>";
        echo "<td>".$jsonResult[$i]["attachmentPoint"][0]["port"]."</td>";
        echo "</tr>";
    }
}

