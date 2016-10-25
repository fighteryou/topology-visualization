/**
 * Created by root on 5/21/16.
 */
$(document).ready(function(){
    $.get("php/allinfo.php",function(data){
        $("#tbodyallinfo").html(data);
    });
});
