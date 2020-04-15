$("nav ul li a").click(function() {  
    $("nav ul li a").removeClass("ativado");
    $(this).toggleClass("ativado");  
}); 
