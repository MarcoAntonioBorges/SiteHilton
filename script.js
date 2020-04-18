$("nav ul li a").click(function() {
    $("nav ul li a").removeClass("ativado");
    $(this).toggleClass("ativado");
});

/*
    MODO DE PEGAR O ANO CORRENTE E INSERIR NO ELEMENTO COM O JQUERY
    BIBLIOTECA JQUERY
*/
$("#date-now").text(
    new Date().getFullYear()
);


/* MODO DE PEGAR O ANO CORRENTE E INSERIR NO ELEMENTO HTML COM JAVASCRIPT PADRÃO
    JAVASCRIPT DEFAULT

var dateNowElement = document.getElementById("date-now");
dateNowElement.innerText = new Date().getFullYear;

*/