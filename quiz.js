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