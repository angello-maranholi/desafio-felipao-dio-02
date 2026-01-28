let vitorias = 0;
let derrotas = 0;

function checagemNivel(saldoVitorias) {
    if (saldoVitorias <= 10) {
        return "ferro";
    } else if (saldoVitorias <= 20) {
        return "bronze";
    } else if (saldoVitorias <= 50) {
        return "prata";
    } else if (saldoVitorias <= 80) {
        return "ouro";
    } else if (saldoVitorias <= 90) {
        return "diamante";
    } else if (saldoVitorias <= 100) {
        return "Lendário";
    } else if (saldoVitorias >= 101) {
        return "imortal";
    } 
}

function atualizarHeroi() {
    let saldoVitorias = vitorias - derrotas;
    let nivel = checagemNivel(saldoVitorias)
    let checagem = `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
    console.log(checagem);
}

vitorias = 25;
derrotas = 6
atualizarHeroi();