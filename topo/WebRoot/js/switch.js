/**
 * Created by root on 5/21/16.
 */
$(document).ready(function(){
    $.get("php/switchinfo.php",function(data){
        $("#tbodySwitch").html(data);
    })
});