//essa classe tem como proposito organizar as informações recolhidas durante o quiz, de forma a facilitar o calculo de acertos
//final e também a criação da tabela de placares.
export default class Quiz {

    #nome = "";
    #respostas = [];
    #acertos = 0;

    checkRespostas(){
        return this.#acertos;
    }

    adicionaResposta(res, acerto){
        this.#respostas.push(res);
        if(acerto == true){
            this.#acertos++;
        }
    }

    setNome(nome){
        this.#nome = nome;
    }

    getNome(){
        return this.#nome;
    }

}