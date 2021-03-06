$(document).ready(function(){
    var r = new Raphael("mypaper", 800, 1000);
    var cip = new Array();
    var cdpid = new Array();
    var dpid = new Array();
    var ipv4 = new Array();
    var mac = new Array();
    var port = new Array();
    var swdpid = new Array();
    var in_src = new Array();
    var in_dst = new Array();
    var ex_src = new Array();
    var ex_dst = new Array();


    var src1 = "img/host.png"; 
    var src2 = "img/switch.png";
    var src3 = "img/controller.png";


    var cx = new Array();
    var cy = new Array();
    var swx = new Array();
    var swy = new Array();
    var hostx = new Array();
    var hosty = new Array();



 /* r.path('M 50,400 L 50,780 Z');
    r.path('M 200,500 L 200,780 Z');
    r.path('M 350,600 L 350,780 Z');
    r.path('M 450,600 L 450,780 Z');
    r.path('M 600,500 L 600,780 Z');
    r.path('M 750,400 L 750,780 Z');


    r.path('M 50,400 L 200,500 Z');
    r.path('M 200,500 L 350,600 Z');
    r.path('M 450,600 L 600,500 Z');



    r.path('M 50,400 L 450,600 Z');
    r.path('M 600,500 L 750,400 Z');


    r.path('M 200,100 L 50,400 Z');
    r.path('M 200,100 L 200,500 Z');
    r.path('M 200,100 L 350,600 Z');
    r.path('M 400,300 L 450,600 Z');
    r.path('M 400,300 L 600,500 Z');
    r.path('M 600,100 L 750,400 Z');


    r.path('M 200,100 L 600,100 Z');
    r.image( src3, 370, 270, 60, 60);
    r.text(370, 270 ,   "c-192.168.75.139").attr({ fill : "#000", "font-size" : 13 });

    r.path('M 400,290 L 600,100 Z');



    r.image( src3, 170, 70, 60, 60);
    r.text(170, 70 ,   "c-192.168.75.138").attr({ fill : "#000", "font-size" : 13 });

    r.image( src3, 570, 70, 60, 60);
    r.text(570, 70 ,   "c-192.168.75.140").attr({ fill : "#000", "font-size" : 13 });




    r.image(src2, 20,370 , 60, 60);
    r.text(20,370 , "s-02").attr({fill: "#000", "font-size": 13});

    r.image(src2, 170,470 , 60, 60);
    r.text(170,470, "s-03").attr({fill: "#000", "font-size": 13});

    r.image(src2, 320,570 , 60, 60);
    r.text(320,570 , "s-01").attr({fill: "#000", "font-size": 13});

    r.image(src2, 420,570 , 60, 60);
    r.text(420,570, "s-04").attr({fill: "#000", "font-size": 13});

    r.image(src2, 570,470 , 60, 60);
    r.text(570,470, "s-05").attr({fill: "#000", "font-size": 13});

    r.image(src2, 720,370 , 60, 60);
    r.text(720,370, "s-06").attr({fill: "#000", "font-size": 13});




    r.image( src1, 20, 750, 60, 60);
    r.text(20, 750 ,   "h-10.0.0.2").attr({ fill : "#000", "font-size" : 13 });
    r.image( src1, 170, 750, 60, 60);
    r.text(170, 750 ,   "h-10.0.0.3").attr({ fill : "#000", "font-size" : 13 });
    r.image( src1, 320, 750, 60, 60);
    r.text(320, 750 ,   "h-10.0.0.1").attr({ fill : "#000", "font-size" : 13 });
    r.image( src1, 420, 750, 60, 60);
    r.text(420, 750 ,   "h-10.0.0.4").attr({ fill : "#000", "font-size" : 13 });
    r.image( src1, 570, 750, 60, 60);
    r.text(570, 750 ,   "h-10.0.0.5").attr({ fill : "#000", "font-size" : 13 });
    r.image( src1, 720, 750, 60, 60);
    r.text(720, 750 ,   "h-10.0.0.6").attr({ fill : "#000", "font-size" : 13 });

});  */

    $.get("php/controller.php",function(data){
        //alert(data);
        explaincontroller(data);
        explainc_sw(data);
    })


    $.get("php/switch.php",function(data){
        //alert(data);
        explainsw(data);
    })


    $.get("php/host.php",function(data){
        //alert(data);
        explainhost(data);
        explainhost_sw();
    })


    $.get("php/interlink.php",function(data){
        //alert(data);
        explaininterlink(data);
    })

    $.get("php/exterlink.php",function(data){
        //alert(data);
        explainexterlink();
    })

    explainshow();


    function explaincontroller()
    {
        var i;
        var obj=eval("("+data+")");
        //alert(obj1.length);
        for(i=0;i<obj.length;i++)
        {
            cip[i]=obj[i].ControllerIp;
            cdpid[i]=obj[i].dpid;
        }

        if(cip.length<3)
        {

            var x=300;
            var y=100;
            var i;
            for(i=0;i<cip.length;i++)
            {
                if(cip[i]!="0")
                {
                    //r.image( src2, x, y, 100, 100);
                    // r.text(x,y ,   "switch").attr({ fill : "#000", "font-size" : 13 });
                    cx[i]=x;
                    cy[i]=y;
                    x=x+300;
                }
            }
        }
        else
        {
            var x=50;
            var y=100;
            var i;
            var j= parseInt(700/(dpid.length-1));
            var m= parseInt(350/(dpid.length/2));
            //alert(j);
            //alert(m);
            for(i=0;i<cip.length/2;i++)
            {
                cx[i]=x;
                cy[i]=y;
                // r.image( src2, x, y, 60, 60);
                // r.text(x,y ,   "switch").attr({ fill : "#000", "font-size" : 13 });
                x=x+j;
                y=y+m;
            }
            y=y-m;
            x=x-j;

            if(parseInt(cip.length/2)==cip.length/2)
            {
                for (i = Math.ceil(cip.length/2); i < cip.length; i++) {

                    x = x + j;
                    cx[i]=x;
                    cy[i]=y;
                    // r.image(src2, x, y, 60, 60);
                    // r.text(x, y, "switch").attr({fill: "#000", "font-size": 13});
                    y = y - m;
                }
            }
            else {
                for (i = Math.ceil(cip.length/2); i < cip.length; i++) {

                    x = x + j;
                    y = y - m;
                    cx[i]=x;
                    cy[i]=y;
                    // r.image(src2, x, y, 60, 60);
                    // r.text(x, y, "switch").attr({fill: "#000", "font-size": 13});
                }
            }
        }
    }



    function explainsw(data){
        var i;
        var obj=eval("("+data+")");
        //alert(obj1.length);
        for(i=0;i<obj.length;i++)
        {
            dpid[i]=obj[i].dpid;
        }
        //alert(dpid[0]);
        //alert(dpid[1]);
        //alert(dpid[3]);
        //alert(dpid.length);

        if(dpid.length<3)
        {
            //alert(dpid.length);
            var x=300;
            var y=400;
            var i;
            for(i=0;i<dpid.length;i++)
            {
                if(dpid[i]!="0")
                {
                    //r.image( src2, x, y, 100, 100);
                   // r.text(x,y ,   "switch").attr({ fill : "#000", "font-size" : 13 });
                    swx[i]=x;
                    swy[i]=y;
                    x=x+300;
                }
            }
        }
        else
        {
            var x=50;
            var y=400;
            var i;
            var j= parseInt(700/(dpid.length-1));
            var m= parseInt(350/(dpid.length/2));
             //alert(j);
             //alert(m);
            for(i=0;i<dpid.length/2;i++)
            {
                swx[i]=x;
                swy[i]=y;
               // r.image( src2, x, y, 60, 60);
                // r.text(x,y ,   "switch").attr({ fill : "#000", "font-size" : 13 });
                x=x+j;
                y=y+m;
            }
            y=y-m;
            x=x-j;

            if(parseInt(dpid.length/2)==dpid.length/2)
            {
                for (i = Math.ceil(dpid.length/2); i < dpid.length; i++) {

                    x = x + j;
                    swx[i]=x;
                    swy[i]=y;
                  // r.image(src2, x, y, 60, 60);
                   // r.text(x, y, "switch").attr({fill: "#000", "font-size": 13});
                    y = y - m;
                }
            }
            else {
                for (i = Math.ceil(dpid.length/2); i < dpid.length; i++) {

                    x = x + j;
                    y = y - m;
                    swx[i]=x;
                    swy[i]=y;
                   // r.image(src2, x, y, 60, 60);
                    // r.text(x, y, "switch").attr({fill: "#000", "font-size": 13});
                }
            }
        }
    }



     function explainhost(data){
     var i;
      var z;
         var flag=0;
     var obj=eval("("+data+")");
        // alert(obj[2].ipv4);
     for(i=0;i<obj.length;i++)
     {
     if((obj[i].ipv4)!=0)
     {
         for(z=flag;z<100;z++) {

             ipv4[z] = obj[i].ipv4;
             mac[z] = obj[i].mac;
             var attachmentPoint = obj[i].attachmentPoint;
             //alert(attachmentPoint[0].switchDPID);
             swdpid[z]= attachmentPoint[0].switchDPID;
             port[z]= attachmentPoint[0].port;
             //alert("hhhhhhh");
             //alert(ipv4[z]);
              flag=z+1;
              break;
         }
     }
     }
         //alert(ipv4[0]);
         //alert(mac.length);

         var x=50;
         var y=850;
         var i;
         var j= parseInt(700/(ipv4.length-1));
         //alert("hhhhhhh");
         for(i=0;i<ipv4.length;i++)
         {

              hostx[i]=x;
              hosty[i]=y;
            // alert(hostx[i]);
             //r.image( src1, x, y, 60, 60);
            //r.text(x,y ,   "host").attr({ fill : "#000", "font-size" : 13 });
             x=x+j;
         }
     }


    function explainc_sw(){
        var i;
        var j;
        alert("hhhhhhhhhhh");
        for(i=0;i<dpid.length;i++)
            for(j=0;j<cip.length;j++)
                if(dpid[i] == cdpid[j])
                {
                    swx[j]=swx[j]+30;
                    swy[j]=swy[j]+30;
                    cx[i]=cx[i]+30;
                    cy[i]=cy[i]+30;
                    var s='M '+swx[j]+','+swy[j]+' L '+cx[i]+','+cy[i]+' Z';
                    //alert(s);
                    r.path(s);
                    swx[j]=swx[j]-30;
                    swy[j]=swy[j]-30;
                    cx[i]=cx[i]-30;
                    cy[i]=cy[i]-30;
                }
    }



    function explainhost_sw(){
        var i;
        var j;
        //alert(dpid.length);
        alert("hhhhhhhhhhh");
        for(i=0;i<ipv4.length;i++)
            for(j=0;j<dpid.length;j++)
                if(swdpid[i] == dpid[j])
                {
                    swx[j]=swx[j]+30;
                    swy[j]=swy[j]+30;
                    hostx[i]=hostx[i]+30;
                    hosty[i]=hosty[i]+30;
                    var s='M '+swx[j]+','+swy[j]+' L '+hostx[i]+','+hosty[i]+' Z';
                    //alert(s);
                    r.path(s);
                    swx[j]=swx[j]-30;
                    swy[j]=swy[j]-30;
                    hostx[i]=hostx[i]-30;
                    hosty[i]=hosty[i]-30;
                }
    }



    function explaininterlink(data){
        var obj=eval("("+data+")");
        var m;
        var n;
        //alert("hhhhhhhhhhh");
        for(var i=0;i<obj.length;i++)
        {
             in_src[i] = obj[i].src_switch;
             in_dst[i] = obj[i].dst_switch;
           // alert(in_dst[i]);
        }

        for(var i=0;i<in_src.length;i++)
               for(m=0;m<dpid.length;m++)
                   for(n=0;n<dpid.length;n++)
                   if(dpid[m]==in_src[i]&&dpid[n]==in_dst[i])
                   {
                       swx[m]=swx[m]+30;
                       swy[m]=swy[m]+30;
                       swx[n]=swx[n]+30;
                       swy[n]=swy[n]+30;
                       var s='M '+swx[m]+','+swy[m]+' L '+swx[n]+','+swy[n]+' Z';
                       //alert(s);
                       r.path(s);
                       swx[m]=swx[m]-30;
                       swy[m]=swy[m]-30;
                       swx[n]=swx[n]-30;
                       swy[n]=swy[n]-30;
                   }

    }
    
    
    
    function explainexterlink(data){
        var obj=eval("("+data+")");
        var m;
        var n;
        //alert("hhhhhhhhhhh");
        for(var i=0;i<obj.length;i++)
        {
            ex_src[i] = obj[i].src_switch;
            ex_dst[i] = obj[i].dst_switch;
        }

        for(var i=0;i<ex_src.length;i++)
            for(m=0;m<dpid.length;m++)
                for(n=0;n<dpid.length;n++)
                    if(dpid[m]==ex_src[i]&&dpid[n]==ex_dst[i])
                    {
                        swx[m]=swx[m]+30;
                        swy[m]=swy[m]+30;
                        swx[n]=swx[n]+30;
                        swy[n]=swy[n]+30;
                        var s='M '+swx[m]+','+swy[m]+' L '+swx[n]+','+swy[n]+' Z';
                        //alert(s);
                        r.path(s);
                        swx[m]=swx[m]-30;
                        swy[m]=swy[m]-30;
                        swx[n]=swx[n]-30;
                        swy[n]=swy[n]-30;
                    }
    }





    //r.path('M 140,25 L 130,130 Z');



    function explainshow(){
        alert("zzzzzzzzzzzzzzzzz");

        for(var i=0;i<cip.length;i++)
        {
            r.image( src3, cx[i], cy[i], 60, 60);
            r.text(cx[i],cy[i],    cip[i]).attr({ fill : "#000", "font-size" : 13 });
        }

        for(var i=0;i<cdpid.length;i++)
        {
             r.image( src2, swx[i], swy[i], 60, 60);
             r.text(swx[i],swy[i],   cdpid[i]).attr({ fill : "#000", "font-size" : 13 });
        }

        for(var i=0;i<ipv4.length;i++)
        {
            //alert(hostx[i]);
            r.image( src1, hostx[i], hosty[i], 60, 60);
            r.text(hostx[i],hosty[i],   ipv4[i]).attr({ fill : "#000", "font-size" : 13 })
        }
    }

});
