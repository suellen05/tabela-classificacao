let pontosCruzeiro = 0, pontosFlamengo = 0;

let btVitoriaCruzeiro = document.querySelector ("#vitoria-cruzeiro");

btVitoriaCruzeiro.onclick = () => {
 pontosCruzeiro += calcularPontos ("vitoria");
 AtualizaTabelaPontos("cruzeiro");
};

let btVitoriaFlamengo = document.querySelector ("#vitoria-flamengo");

btVitoriaFlamengo.onclick = () => {
     pontosFlamengo+=(calcularPontos("vitoria"));
     AtualizaTabelaPontos("flamengo");

}

function calcularPontos(resultado){
    if(resultado == "vitoria"){
        return 3;
    }else if(Resultado == "empate"){
        return 1;
       }else{
        return 0;
    }
}
function AtualizaTabelaPontos(time){
    if(time== "cruzeiro"){
        document.querySelector(".pontos-cruzeiro").innerText = pontosCruzeiro;
    }else if(time == "flamengo"){
            document.querySelector(".pontos-flamengo").innerText = pontosFlamengo;

        }
    }
let btEmpateCruzeiro = document.querySelector("#empate-cruzeiro");
btEmpateCruzeiro.onclick =() => {
    pontosCruzeiro += calcularPontos("empate");
    AtualizarTabelaPontos("cruzeiro");
};

let btDerrotaCruzeiro = document.querySelector("#derota-cruzeiro");
btDerrotaCruzeiro.onclick =() => {
    pontosCruzeiro += calcularPontos("derrota");
    AtualizarTabelaPontos("cruzeiro");
};


let btEmpateFlamengo = document.querySelector("#empate-flamengo");
btEmpateFlamengo.onclick =() => {
    pontosFlamengo += calcularPontos("empate");
    AtualizarTabelaPontos("flamengo");
};
let btDerrotaFlamengo = document.querySelector("#derota-flamengo");
btDerrotaFlamengo.onclick =() => {
    pontosflamengo += calcularPontos("derrota");
    AtualizarTabelaPontos("flamengo");
};
