$(document).ready(function(){
    $("nav button#menu").click(function(){
    	$("nav ul#navigation").fadeToggle("slow");
    });

    $("nav button#menu").click(function(){
    	$("nav ul#navigationSm").slideToggle("slow");
    });

    $("section#moreWorks button#expandWork").click(function(){
    	$("section#gallery div.moreworks").slideToggle("slow");
    });
});