<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 5/21/16
 * Time: 3:25 AM
 */

$commend3 = "curl http://localhost:8080/wm/topology/controller/json";
$result3 = exec($commend3);
$jsonResult3 = json_decode($result3,true);
$controllerNum = count($jsonResult3);

$commend1 = "curl http://localhost:8080/wm/topology/c-switches/json";
$result1 = exec($commend1);
$jsonResult1 = json_decode($result1,true);
$switchNum = count($jsonResult1);

$commend2 = "curl http://localhost:8080/wm/topology/hostmap/json";
$result2 = exec($commend2);
$jsonResult2 = json_decode($result2,true);
$hostNum = count($jsonResult2);

$realhostNum = 0;

for($i = 0; $i <$hostNum; $i++)
{
    if(count($jsonResult2[$i]["ipv4"]) != 0)
        $realhostNum = $realhostNum+1;
}

echo "<tr>";
echo "<td>".$controllerNum."</td>";
echo "<td>".$switchNum."</td>";
echo "<td>".$realhostNum."</td>";
echo "</tr>";