/**
 * Created by root on 5/21/16.
 */
$(document).ready(function(){
    $.get("php/controllerinfo.php",function(data){
        $("#tbodyController").html(data);
    })
});