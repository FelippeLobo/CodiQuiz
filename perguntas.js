//altera as cores dos botões das respostas das questões de acordo com o gabarito,
//apesar da alteração estar ocorrendo de forma correta, devido ao tempo apertado
//não foi possível implementar o retorno as questões após escolher uma das alternativas atraves da tag de navegação
export function mostraResposta(key) {

    var aBotao, bBotao, cBotao, dBotao

    aBotao = document.getElementById("a");
    bBotao = document.getElementById("b");
    cBotao = document.getElementById("c");
    dBotao = document.getElementById("d");

    switch (key) {
        case 1:
            aBotao.classList.add("errado");
            bBotao.classList.add("certo");
            cBotao.classList.add("errado");
            dBotao.classList.add("errado");
            break;
        case 2:
            aBotao.classList.add("certo");
            bBotao.classList.add("errado");
            cBotao.classList.add("errado");
            dBotao.classList.add("errado");
            break;
        case 3:
            aBotao.classList.add("errado");
            bBotao.classList.add("errado");
            cBotao.classList.add("certo");
            dBotao.classList.add("errado");
            break;
        case 4:
            aBotao.classList.add("errado");
            bBotao.classList.add("errado");
            cBotao.classList.add("certo");
            dBotao.classList.add("errado");
            break;

        case 5:
            aBotao.classList.add("errado");
            bBotao.classList.add("certo");
            cBotao.classList.add("errado");
            dBotao.classList.add("errado");
            break;
        case 6:
            aBotao.classList.add("errado");
            bBotao.classList.add("errado");
            cBotao.classList.add("certo");
            dBotao.classList.add("errado");
            break;
        case 7:
            aBotao.classList.add("errado");
            bBotao.classList.add("errado");
            cBotao.classList.add("errado");
            dBotao.classList.add("certo");
            break;
        case 8:
            aBotao.classList.add("certo");
            bBotao.classList.add("errado");
            cBotao.classList.add("errado");
            dBotao.classList.add("errado");
            break;
        case 9:
            aBotao.classList.add("errado");
            bBotao.classList.add("certo");
            cBotao.classList.add("errado");
            dBotao.classList.add("errado");
            break;
        case 10:
            aBotao.classList.add("errado");
            bBotao.classList.add("certo");
            cBotao.classList.add("errado");
            dBotao.classList.add("errado");
            break;

        case 11:
            aBotao.classList.add("errado");
            bBotao.classList.add("errado");
            cBotao.classList.add("certo");
            dBotao.classList.add("errado");
            break;
        case 12:
            aBotao.classList.add("errado");
            bBotao.classList.add("errado");
            cBotao.classList.add("certo");
            dBotao.classList.add("errado");
            break;


        default:
            break;
    }

}

//retorna para cada pergunta seu grupo de tags html para auxiliar na clareza do código no arquivo index.html,
//a função é basicamente um switch case em que a chave é o numero da questão pretendida, cada questão possui em seus
//botoes de respostas uma chamada para o addCode() apontando para a proxima pergunta, enviando também informações importantes
//como se o botao selecionado é o correto e também qual resposta foi selecionada.
//também se encontram aqui as tags da tela inicial do modal do quiz e a tela final.
export function retornaPergunta(key) {

    switch (key) {
        case -1:
            let p =
                "<div id=\"inicio\" class=\"row\">" + '\n' +
                "<div class=\"col align-self-center perguntas\">" + '\n' +
                "<h4>Parabéns por chegar até aqui!</h4>" + '\n' +
                " <br>" + '\n' +
                "<p>Sua pontuação final foi:</p>" + '\n' +
                "<h1 id=\"pontuacao\"><b>12/12</b> (100)</h1>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col row sairRow\">" + '\n' +
                " <div class=\"input-group mb-3\">"+ '\n' +
                "<input id=\"nome\" type=\"text\" class=\"form-control\" placeholder=\"Nome\" aria-label=\"Nome\" aria-describedby=\"basic-addon2\">"+ '\n' +
                "<div class=\"input-group-append\">"+ '\n' +
                "<button  onclick=\"adicionaJogador()\" class=\"btn btn-outline-secondary\" data-bs-dismiss=\"modal\" type=\"button\">Adicionar ao Placar</button>"+ '\n' +
                "</div>"+ '\n' +
                "</div>"+ '\n' +
                "<div class=\"col sair\">" + '\n' +
                "<button type=\"button\" class=\"btn btn-outline-danger\"" + '\n' +
                " data-bs-dismiss=\"modal\">Sair</button>" + '\n' +
                "</div>" + '\n' +
                "</div>" + '\n' +
                "</div>";
            return p;
            break;
        case 0:
            let p0 =
                "<div id=\"inicio\" class=\"row\">" + '\n' +
                "<div class=\"col align-self-center perguntas\">" + '\n' +
                "<h2>Preparado?</h2>" + '\n' +
                "<p>Tome um fôlego antes de começar &#10024; </p>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col row \">" + '\n' +
                " <div class=\"col colInicio\">" + '\n' +
                "<button onclick=\"addCode(1)\" type=\"button\"" + '\n' +
                "class=\"btn btn-outline-primary btn-resposta certo\">Iniciar</button>" + '\n' +
                "</div>" + '\n' +
                "</div>" + '\n' +
                "</div>";
            return p0;
            break;
        case 1:
            let p1 =
                "<div id=\"p1\" class=\"row\">" + '\n' +
                "<div class=\"col align-self-center perguntas\">" + '\n' +
                " <h2>Pergunta 1</h2>" + '\n' +
                "<p>Qual tag HTML é usada para criar um link?</p>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col row\">" + '\n' +
                "<div class=\"col\">" + '\n' +
                "<button onclick=\"addCode(2, 'a', false)\" type=\"button\" id=\"a\" class=\"btn btn-outline-primary btn-resposta\">A) &ltli&gt</button>" + '\n' +
                "<button onclick=\"addCode(2, 'c', false)\" type=\"button\" id=\"c\"class=\"btn btn-outline-primary btn-resposta\">C) &ltp&gt</button>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col\"> <button onclick=\"addCode(2, 'b', true)\" type=\"button\" id=\"b\" class=\"btn btn-outline-primary btn-resposta\">B) &lta&gt</button>" + '\n' +
                "<button onclick=\"addCode(2, 'd', false)\" type=\"button\" id=\"d\" class=\"btn btn-outline-primary btn-resposta\">D) &ltdiv&gt</button>" + '\n' +
                "</div>" + '\n' +
                "</div>" + '\n' +
                "</div>";

            return p1;
            break;
        case 2:
            let p2 =
                "<div id=\"p2\" class=\"row\">" + '\n' +
                "<div class=\"col align-self-center perguntas\">" + '\n' +
                " <h2>Pergunta 2</h2>" + '\n' +
                "<p>Em HTML, qual tag é usada para criar uma lista numerada?</p>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col row\">" + '\n' +
                "<div class=\"col\">" + '\n' +
                "<button onclick=\"addCode(3, 'a', true)\" type=\"button\" id=\"a\" class=\"btn btn-outline-primary btn-resposta\">A) &ltol&gt</button>" + '\n' +
                "<button onclick=\"addCode(3, 'c', false)\" type=\"button\" id=\"c\"class=\"btn btn-outline-primary btn-resposta\">C) &ltdl&gt</button>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col\"> <button onclick=\"addCode(3, 'b', false)\" type=\"button\" id=\"b\" class=\"btn btn-outline-primary btn-resposta\">B) &ltul&gt</button>" + '\n' +
                "<button onclick=\"addCode(3, 'd', false)\" type=\"button\" id=\"d\" class=\"btn btn-outline-primary btn-resposta\">D) &ltli&gt</button>" + '\n' +
                "</div>" + '\n' +
                "</div>" + '\n' +
                "</div>";

            return p2;
            break;
        case 3:
            let p3 =
                "<div id=\"p3\" class=\"row\">" + '\n' +
                "<div class=\"col align-self-center perguntas\">" + '\n' +
                " <h2>Pergunta 3</h2>" + '\n' +
                "<p>Qual atributo HTML define o texto exibido quando o cursor paira sobre um elemento?</p>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col row\">" + '\n' +
                "<div class=\"col\">" + '\n' +
                "<button onclick=\"addCode(4, 'a', false)\" type=\"button\" id=\"a\" class=\"btn btn-outline-primary btn-resposta\">A) hover</button>" + '\n' +
                "<button onclick=\"addCode(4, 'c', true)\" type=\"button\" id=\"c\"class=\"btn btn-outline-primary btn-resposta\">C) title</button>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col\"> <button onclick=\"addCode(4, 'b', false)\" type=\"button\" id=\"b\" class=\"btn btn-outline-primary btn-resposta\">B) tooltip</button>" + '\n' +
                "<button onclick=\"addCode(4, 'd', false)\" type=\"button\" id=\"d\" class=\"btn btn-outline-primary btn-resposta\">D) alt</button>" + '\n' +
                "</div>" + '\n' +
                "</div>" + '\n' +
                "</div>";

            return p3;
            break;
        case 4:
            let p4 =
                "<div id=\"p4\" class=\"row\">" + '\n' +
                "<div class=\"col align-self-center perguntas\">" + '\n' +
                " <h2>Pergunta 4</h2>" + '\n' +
                "<p>Qual propriedade CSS é usada para definir a cor do texto?</p>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col row\">" + '\n' +
                "<div class=\"col\">" + '\n' +
                "<button onclick=\"addCode(5, 'a', false)\" type=\"button\" id=\"a\" class=\"btn btn-outline-primary btn-resposta\">A) font-color</button>" + '\n' +
                "<button onclick=\"addCode(5, 'c', true)\" type=\"button\" id=\"c\"class=\"btn btn-outline-primary btn-resposta\">C) color </button>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col\"> <button onclick=\"addCode(5, 'b', false)\" type=\"button\" id=\"b\" class=\"btn btn-outline-primary btn-resposta\">B) text-color</button>" + '\n' +
                "<button onclick=\"addCode(5, 'd', false)\" type=\"button\" id=\"d\" class=\"btn btn-outline-primary btn-resposta\">D) text-style</button>" + '\n' +
                "</div>" + '\n' +
                "</div>" + '\n' +
                "</div>";

            return p4;
            break;
        case 5:
            let p5 =
                "<div id=\"p5\" class=\"row\">" + '\n' +
                "<div class=\"col align-self-center perguntas\">" + '\n' +
                " <h2>Pergunta 5</h2>" + '\n' +
                "<p>O que significa \"CSS\"?</p>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col row\">" + '\n' +
                "<div class=\"col\">" + '\n' +
                "<button onclick=\"addCode(6, 'a', false)\" type=\"button\" id=\"a\" class=\"btn btn-outline-primary btn-resposta\">A)Creative Style Sheets</button>" + '\n' +
                "<button onclick=\"addCode(6, 'c', false)\" type=\"button\" id=\"c\"class=\"btn btn-outline-primary btn-resposta\">C)  Computer Style Sheets </button>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col\"> <button onclick=\"addCode(6, 'b', true)\" type=\"button\" id=\"b\" class=\"btn btn-outline-primary btn-resposta\">B) Cascading Style Sheets</button>" + '\n' +
                "<button onclick=\"addCode(6, 'd', false)\" type=\"button\" id=\"d\" class=\"btn btn-outline-primary btn-resposta\">D) Colorful Style Sheets</button>" + '\n' +
                "</div>" + '\n' +
                "</div>" + '\n' +
                "</div>";

            return p5;
            break;
        case 6:
            let p6 =
                "<div id=\"p6\" class=\"row\">" + '\n' +
                "<div class=\"col align-self-center perguntas\">" + '\n' +
                " <h2>Pergunta 6</h2>" + '\n' +
                "<p>Qual seletor CSS é usado para selecionar um elemento com a classe \"destaque\"?</p>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col row\">" + '\n' +
                "<div class=\"col\">" + '\n' +
                "<button onclick=\"addCode(7, 'a', false)\" type=\"button\" id=\"a\" class=\"btn btn-outline-primary btn-resposta\">A)elemento.destaque</button>" + '\n' +
                "<button onclick=\"addCode(7, 'c', true)\" type=\"button\" id=\"c\"class=\"btn btn-outline-primary btn-resposta\">C)  .destaque </button>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col\"> <button onclick=\"addCode(7, 'b', false)\" type=\"button\" id=\"b\" class=\"btn btn-outline-primary btn-resposta\">B) #destaque</button>" + '\n' +
                "<button onclick=\"addCode(7, 'd', false)\" type=\"button\" id=\"d\" class=\"btn btn-outline-primary btn-resposta\">D) destaque</button>" + '\n' +
                "</div>" + '\n' +
                "</div>" + '\n' +
                "</div>";

            return p6;
            break;
        case 7:
            let p7 =
                "<div id=\"p7\" class=\"row\">" + '\n' +
                "<div class=\"col align-self-center perguntas\">" + '\n' +
                " <h2>Pergunta 7</h2>" + '\n' +
                "<p>Qual palavra-chave é usada para declarar uma variável localmente em JavaScript?</p>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col row\">" + '\n' +
                "<div class=\"col\">" + '\n' +
                "<button onclick=\"addCode(8, 'a', false)\" type=\"button\" id=\"a\" class=\"btn btn-outline-primary btn-resposta\">A) var</button>" + '\n' +
                "<button onclick=\"addCode(8, 'c', false)\" type=\"button\" id=\"c\"class=\"btn btn-outline-primary btn-resposta\">C) vrb</button>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col\"> <button onclick=\"addCode(8, 'b', false)\" type=\"button\" id=\"b\" class=\"btn btn-outline-primary btn-resposta\">B) variable</button>" + '\n' +
                "<button onclick=\"addCode(8, 'd', true)\" type=\"button\" id=\"d\" class=\"btn btn-outline-primary btn-resposta\">D) let </button>" + '\n' +
                "</div>" + '\n' +
                "</div>" + '\n' +
                "</div>";

            return p7;
            break;
        case 8:
            let p8 =
                "<div id=\"p8\" class=\"row\">" + '\n' +
                "<div class=\"col align-self-center perguntas\">" + '\n' +
                " <h2>Pergunta 8</h2>" + '\n' +
                "<p>Qual função JavaScript é usada para exibir uma mensagem em uma caixa de diálogo?</p>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col row\">" + '\n' +
                "<div class=\"col\">" + '\n' +
                "<button onclick=\"addCode(9, 'a', true)\" type=\"button\" id=\"a\" class=\"btn btn-outline-primary btn-resposta\">A) alert </button>" + '\n' +
                "<button onclick=\"addCode(9, 'c', false)\" type=\"button\" id=\"c\"class=\"btn btn-outline-primary btn-resposta\">C) prompt</button>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col\"> <button onclick=\"addCode(9, 'b', false)\" type=\"button\" id=\"b\" class=\"btn btn-outline-primary btn-resposta\">B) popup</button>" + '\n' +
                "<button onclick=\"addCode(9, 'd', false)\" type=\"button\" id=\"d\" class=\"btn btn-outline-primary btn-resposta\">D) message</button>" + '\n' +
                "</div>" + '\n' +
                "</div>" + '\n' +
                "</div>";

            return p8;
            break;
        case 9:
            let p9 =
                "<div id=\"p9\" class=\"row\">" + '\n' +
                "<div class=\"col align-self-center perguntas\">" + '\n' +
                " <h2>Pergunta 9</h2>" + '\n' +
                "<p>Qual framework é amplamente utilizado para criar layouts responsivos e componentes de interface?</p>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col row\">" + '\n' +
                "<div class=\"col\">" + '\n' +
                "<button onclick=\"addCode(10, 'a', false)\" type=\"button\" id=\"a\" class=\"btn btn-outline-primary btn-resposta\">A) Foundation</button>" + '\n' +
                "<button onclick=\"addCode(10, 'c', false)\" type=\"button\" id=\"c\"class=\"btn btn-outline-primary btn-resposta\">C) Tailwind CSS</button>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col\"> <button onclick=\"addCode(10, 'b', true)\" type=\"button\" id=\"b\" class=\"btn btn-outline-primary btn-resposta\">B) Bootstrap </button>" + '\n' +
                "<button onclick=\"addCode(10, 'd', false)\" type=\"button\" id=\"d\" class=\"btn btn-outline-primary btn-resposta\">D) Materialize</button>" + '\n' +
                "</div>" + '\n' +
                "</div>" + '\n' +
                "</div>";

            return p9;
            break;
        case 10:
            let p10 =
                "<div id=\"p10\" class=\"row\">" + '\n' +
                "<div class=\"col align-self-center perguntas\">" + '\n' +
                " <h2>Pergunta 10</h2>" + '\n' +
                "<p>Qual palavra-chave é usada para definir uma função em Python?</p>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col row\">" + '\n' +
                "<div class=\"col\">" + '\n' +
                "<button onclick=\"addCode(11, 'a', false)\" type=\"button\" id=\"a\" class=\"btn btn-outline-primary btn-resposta\">A) func</button>" + '\n' +
                "<button onclick=\"addCode(11, 'c', false)\" type=\"button\" id=\"c\"class=\"btn btn-outline-primary btn-resposta\">C) function </button>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col\"> <button onclick=\"addCode(11, 'b', true)\" type=\"button\" id=\"b\" class=\"btn btn-outline-primary btn-resposta\">B) def </button>" + '\n' +
                "<button onclick=\"addCode(11, 'd', false)\" type=\"button\" id=\"d\" class=\"btn btn-outline-primary btn-resposta\">D) define</button>" + '\n' +
                "</div>" + '\n' +
                "</div>" + '\n' +
                "</div>";

            return p10;
            break;
        case 11:
            let p11 =
                "<div id=\"p11\" class=\"row\">" + '\n' +
                "<div class=\"col align-self-center perguntas\">" + '\n' +
                " <h2>Pergunta 11</h2>" + '\n' +
                "<p>Qual biblioteca JavaScript é comumente usada para criar interfaces de usuário interativas?</p>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col row\">" + '\n' +
                "<div class=\"col\">" + '\n' +
                "<button onclick=\"addCode(12, 'a', false)\" type=\"button\" id=\"a\" class=\"btn btn-outline-primary btn-resposta\">A) Angular</button>" + '\n' +
                "<button onclick=\"addCode(12, 'c', true)\" type=\"button\" id=\"c\"class=\"btn btn-outline-primary btn-resposta\">C)  React  </button>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col\"> <button onclick=\"addCode(12, 'b', false)\" type=\"button\" id=\"b\" class=\"btn btn-outline-primary btn-resposta\">B) Vue.js</button>" + '\n' +
                "<button onclick=\"addCode(12, 'd', false)\" type=\"button\" id=\"d\" class=\"btn btn-outline-primary btn-resposta\">D) Ember.js</button>" + '\n' +
                "</div>" + '\n' +
                "</div>" + '\n' +
                "</div>";

            return p11;
            break;
        case 12:
            let p12 =
                "<div id=\"p12\" class=\"row\">" + '\n' +
                "<div class=\"col align-self-center perguntas\">" + '\n' +
                " <h2>Pergunta 12</h2>" + '\n' +
                "<p>Em React, qual componente é usado para renderizar elementos sem encapsulamento adicional?</p>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col row\">" + '\n' +
                "<div class=\"col\">" + '\n' +
                "<button onclick=\"addCode(-1, 'a', false)\" type=\"button\" id=\"a\" class=\"btn btn-outline-primary btn-resposta\">A)&ltContainer&gt</button>" + '\n' +
                "<button onclick=\"addCode(-1, 'c', true)\" type=\"button\" id=\"c\"class=\"btn btn-outline-primary btn-resposta\">C)  &ltFragment&gt </button>" + '\n' +
                "</div>" + '\n' +
                "<div class=\"col\"> <button onclick=\"addCode(-1, 'b', false)\" type=\"button\" id=\"b\" class=\"btn btn-outline-primary btn-resposta\">B) &ltElement&gt</button>" + '\n' +
                "<button onclick=\"addCode(-1, 'd', false)\" type=\"button\" id=\"d\" class=\"btn btn-outline-primary btn-resposta\">D) &ltWrapper&gt</button>" + '\n' +
                "</div>" + '\n' +
                "</div>" + '\n' +
                "</div>";

            return p12;
            break;

        default:
            break;
    }


}

