var apiWhatsApp = "";
$(document).ready(function() {
    var tam = $(window).width();
    if (tam <= 480) {
        apiWhatsApp = "https://api.whatsapp.com/send?phone=+5511953172023&text=";
    } else {
        apiWhatsApp = "https://web.whatsapp.com/send?phone=+5511953172023&text=";
    }
});

var messageModel = {
    nome: '',
    sobrenome: '',
    email: '',
    celular: '',
    mensagem: ''
}

function montarMensagem(messageModel) {
    return `Olá, meu nome é *${messageModel.nome} ${messageModel.sobrenome}*, \n*Descrição da Mensagem:* ${messageModel.mensagem} \n\n` +
        `*Meios de contatos:* \n` +
        `📱 *Celular:* ${messageModel.celular} \n` +
        `📩 *Email:* ${messageModel.email}`;


}

function preencherMessageModel(formulario) {
    messageModel.nome = formulario.fname.value;
    messageModel.sobrenome = formulario.lname.value;
    messageModel.email = formulario.email.value;
    messageModel.celular = formulario.phone.value;
    messageModel.mensagem = formulario.message.value;
}

$("#form-contato").submit(function(e) {
    e.preventDefault();
    preencherMessageModel(e.target);

    var textoFormatado = window.encodeURIComponent(montarMensagem(messageModel));
    window.open(apiWhatsApp.concat(textoFormatado));
});