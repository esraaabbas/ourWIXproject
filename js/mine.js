////////////////////////////////////////////////////// templates.html (js)////////////////////////////////////////////////////////

$(document).ready(function(){
    
    $(".sidenav #port a").css("color","#ebeced");
    $(".sidenav #port a").next().css("display","inline-block");
    $(".sidenav #port").css("background-color","#272c33");
    $(".portfolio").css("display","block");
})

$(".sidenav #port").click(function(){
    
    $("a",this).css("color","#ebeced");
    $("a",this).next().css("display","inline-block");
    $(".sidenav .icon").not($("a",this).next()).css("display","none")
    $(this).css("background-color","#272c33");
    $(".portfolio").css("display","block");
    $(".sidenav a").not($("a",this)).css("color","#ebeced");
    $(".link").not($(".portfolio")).css("display","none");
    $(".sidenav li").not($(this)).css("background-color","#3f4652");
    
})
$(".sidenav #bus").click(function(){
    
    $("a",this).css("color","#ebeced");
    $("a",this).next().css("display","inline-block");
    $(".sidenav .icon").not($("a",this).next()).css("display","none")
    $(this).css("background-color","#272c33");
    $(".bussines").css("display","block");
    $(".sidenav a").not($("a",this)).css("color","#ebeced");
    $(".link").not($(".bussines")).css("display","none");
     $(".sidenav li").not($(this)).css("background-color","#3f4652");
    
})
$(".sidenav #owork").click(function(){
    
    $("a",this).css("color","#ebeced");
    $("a",this).next().css("display","inline-block");
    $(".sidenav .icon").not($("a",this).next()).css("display","none")
    $(this).css("background-color","#272c33");
    $(".onlinework").css("display","block");
    $(".sidenav a").not($("a",this)).css("color","#ebeced");
    $(".link").not($(".onlinework")).css("display","none");
    $(".sidenav li").not($(this)).css("background-color","#3f4652");
    
})
$(".sidenav #smedia").click(function(){
    
    $("a",this).css("color","#ebeced");
    $("a",this).next().css("display","inline-block");
    $(".sidenav .icon").not($("a",this).next()).css("display","none")
    $(this).css("background-color","#272c33");
    $(".socialmedia").css("display","block");
    $(".sidenav a").not($("a",this)).css("color","#ebeced");
    $(".link").not($(".socialmedia")).css("display","none");
    $(".sidenav li").not($(this)).css("background-color","#3f4652");
})

$(".viewtemplate").click(function(){
    
    $(".choosesite").css("display","none");
    $("#templateview").css("display","block");
})
////////////////////////////////////////////////////////// template_editor.html /////////////////////////////////////////////////////
var elIDarr=[];
var elID="";

var mylis =$("#colors div");

    mylis.eq(0).css("background-color","#09c");
    mylis.eq(1).css("background-color","yellow");
    mylis.eq(2).css("background-color","tan");
    mylis.eq(3).css("background-color","green");
    mylis.eq(4).css("background-color","red");

$(".li").click(function(){
    
   elIDarr[0]=$(this).attr('id');
    
})

   $("#colors div").click(function(){
        
    var liColor =$(this).css("background-color"); 
    $("#"+elIDarr[0]).css("color",liColor);
    
    
})
$("#choosecolor").click(function(){

    
    $("#colors div").click(function(){
    
    
    var liColor =$(this).css("background-color");
    
    $(elID).css("color",liColor);
    
    
})
    
})



//new WOW().init();

