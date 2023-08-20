import Quiz from "/quiz.js";
import { retornaPergunta } from "/perguntas.js";
import { mostraResposta } from "./perguntas.js";


var quiz = new Quiz();
var placaresQuiz = [];

function addCode(key, resposta, acerto) {

    //reset das ultimas informações do quiz 
    //key == 0 significa tela inicial do modal, key == -1 significa tela final do modal 

    if (key == 0) {

        quiz = new Quiz();
        for (let index = 1; index < 13; index++) {
            var element = document.getElementById("n" + index);

            if (element.classList.contains('pagErrado')) {
                element.classList.remove("pagErrado");
            }
            if (element.classList.contains('pagCerto')) {
                element.classList.remove("pagCerto");
            }
            if (index > 1) {
                element.classList.add("disabled");
            }
        }

    }

    //armazenamento das respostas do jogador e atualização do css de acordo com acerto/erro 
    if (key != 1 && key != 0) {

        quiz.adicionaResposta(resposta, acerto);

        if (key == -1) {
            var i = 12;
        } else {
            var i = key - 1;

        }

        var element = document.getElementById("n" + i);
        element.classList.remove("disabled");

        if (acerto) {
            element.classList.add("pagCerto");
        } else {
            element.classList.add("pagErrado");
        }
        if (key == -1) {
            mostraResposta(12);
        } else {
            mostraResposta(key - 1);
        }

    } else {
        var element = document.getElementById("nav");
        element.classList.remove("invisivel");


    }

    //construição dos blocos das perguntas e substituição do html 
    clearBox("add_to_me");
    let pergunta = retornaPergunta(key);

    document.getElementById("add_to_me")
        .innerHTML = pergunta;

    if (key == -1) {
        var valorAcertos = quiz.checkRespostas();
        var porCentagemAcertos = (valorAcertos / 12) * 100;
        clearBox("pontuacao");
        document.getElementById("pontuacao")
            .innerHTML = "<b>" + valorAcertos + "/12</b> (" + porCentagemAcertos.toFixed(2) + "%) &#127941;";
    }
}
window.addCode = addCode;

//relaciona o nome do jogador com o objeto quiz preenchido até aqui, entao o adiciona na lista de placarez.
function adicionaJogador() {
    let nome = document.getElementById("nome").value;
    quiz.setNome(nome);
    placaresQuiz.push(quiz);

}
window.adicionaJogador = adicionaJogador;

//Atualiza a tabela de placares a partir das informações adicionadas na lista placaresQuiz, 
//É feito inicialmente uma limpeza na tabela anterior, entao uma ordenação com base no numero de acertos de cada jogador,
//jogares sem nomes não são considerados, entao é criado um objeto tr (table row) para cada jogador e adicionado na tabela
function atualizaPlacar() {

    clearBox("tabelaPlacar");

    placaresQuiz.sort(function (a, b) { return b.checkRespostas() - a.checkRespostas() });

    
    for (let index = 0; index < placaresQuiz.length; index++) {
        const element = placaresQuiz[index];
        let nome = element.getNome();
       
        if (nome != "") {
            let acertos = element.checkRespostas();
            let porcetagemAcertos = ((acertos / 12) * 100).toFixed(2);
       
            let row = document.createElement("tr");

            let cell0 = document.createElement("td");
            let cell1 = document.createElement("td");
            let cell2 = document.createElement("td");
            let cell3 = document.createElement("td");

            let val = index + 1;

            let call0Text = document.createTextNode(val);
            let cell1Text = document.createTextNode(nome);
            let cell2Text = document.createTextNode(acertos);
            let cell3Text = document.createTextNode(porcetagemAcertos);

            cell0.appendChild(call0Text);
            cell1.appendChild(cell1Text);
            cell2.appendChild(cell2Text);
            cell3.appendChild(cell3Text);

            row.appendChild(cell0);
            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);

            document.getElementById("tabelaPlacar")
                .appendChild(row);
        }

    }



}
window.atualizaPlacar = atualizaPlacar;

//função auxiliar para limpar o conteudo interno de uma div ou qualquer tag html a partir do seu id
function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}
