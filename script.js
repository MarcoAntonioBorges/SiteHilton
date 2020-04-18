$(document).ready(function() {

    $("nav ul li a").click(function() {
        $("nav ul li a").removeClass("ativado");
        $(this).toggleClass("ativado");
    });

    formatarVideoPrincipal();


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

});

function formatarVideoPrincipal() {
    var tam = $(window).width();
    var elementMain = $("#pagina-inicial");
    var firstChild = elementMain.children().get(0);
    var secondChild = elementMain.children().get(2);
    if (tam <= 480) {
        firstChild.remove();
        secondChild.remove();
    } else {
        let video = elementMain.children().get(0);
        video.remove();
        elementMain.append(firstChild);
        elementMain.append(video);
        elementMain.append(secondChild);
    }
}