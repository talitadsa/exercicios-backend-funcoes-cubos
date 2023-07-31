const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],

    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push({
            tipo: "Depósito",
            valor: valor
        });
        return `Depósito de R$${valor / 100} realizado para o cliente: ${this.nome}.`;
    },

    sacar: function (valor) {
        if (valor > this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}.`;
        }

        this.saldo -= valor;
        this.historicos.push({
            tipo: "Saque",
            valor: valor
        });
        return `Saque de R$${valor / 100} realizado para o cliente: ${this.nome}.`;
    },

    extrato: function () {
        let historico = this.historicos.map((item) => `${item.tipo} de R$${item.valor / 100}`);
        return `Extrato de ${this.nome} - Saldo: R$${this.saldo / 100}\nHistórico:\n${historico.join("\n")}`;
    }
};

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());
