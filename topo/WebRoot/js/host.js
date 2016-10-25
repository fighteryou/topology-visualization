/**
 * Created by root on 5/19/16.
 */
$(document).ready(function(){
    $.get("php/hostinfo.php",function(data){
        $("#tbodyHost").html(data);
    })
});