$(document).ready(function(){
    
    $(".sidenav #port a").css("color","black");
    $(".sidenav #port").css("background-color","bisque");
    $(".portfolio").css("display","block");
})

$(".sidenav #port").click(function(){
    
    $("a",this).css("color","black");
    $(this).css("background-color","bisque");
    $(".portfolio").css("display","block");
    $(".sidenav a").not($("a",this)).css("color","bisque");
    $(".link").not($(".portfolio")).css("display","none");
    $(".sidenav li").not($(this)).css("background-color","darkgrey");
    
})
$(".sidenav #bus").click(function(){
    
    $("a",this).css("color","black");
    $(this).css("background-color","bisque");
    $(".bussines").css("display","block");
    $(".sidenav a").not($("a",this)).css("color","bisque");
    $(".link").not($(".bussines")).css("display","none");
     $(".sidenav li").not($(this)).css("background-color","darkgrey");
    
})
$(".sidenav #owork").click(function(){
    
    $("a",this).css("color","black");
    $(this).css("background-color","bisque");
    $(".onlinework").css("display","block");
    $(".sidenav a").not($("a",this)).css("color","bisque");
    $(".link").not($(".onlinework")).css("display","none");
    $(".sidenav li").not($(this)).css("background-color","darkgrey");
    
})
$(".sidenav #smedia").click(function(){
    
    $("a",this).css("color","black");
    $(this).css("background-color","bisque");
    $(".socialmedia").css("display","block");
    $(".sidenav a").not($("a",this)).css("color","bisque");
    $(".link").not($(".socialmedia")).css("display","none");
    $(".sidenav li").not($(this)).css("background-color","darkgrey");
})

$(".viewtemplate").click(function(){
    
    $(".choosesite").css("display","none");
    $("#templateview").css("display","block");
})