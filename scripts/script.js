// # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

let herois=[10,14,32,78,85,99,14760697563832058564];
let mostraHerois = document.getElementById("container")


function calculaRank(rank) {
    let emblema;
    if (rank >= 0 && rank <= 10) {
        emblema = "Ferro";
    } else if (rank >= 11 && rank <= 20) {
        emblema = "Bronze";
    } else if (rank >= 21 && rank <= 500) {
        emblema = "Prata";
    } else if (rank >= 81 && rank <= 90) {
        emblema = "Ouro";
    } else if (rank >= 91 && rank <= 100) {
        emblema = "Diamante";
    } else if (rank >= 101) {
        emblema = "Lendário";
    } else {
        emblema = "Imortal";
    }
    adicionaRank(rank, emblema);
}

function adicionaRank(numeroDeVitorias, emblema){
    const novoHeroi = document.createElement("h2");    
    const texto = "O Herói tem de saldo de " + numeroDeVitorias + " está no nível de " + emblema;
    novoHeroi.innerHTML = texto;
    mostraHerois.appendChild(novoHeroi);
}

for (i=0; i<herois.length; i++){
    calculaRank(herois[i]);
    console.log(herois[i])
}


