const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    calcularTotalDeItens: function () {
      let totalItens = 0;
      for (const produto of this.produtos) {
        totalItens += produto.qtd;
      }
      return totalItens;
    },
    calcularTotalAPagar: function () {
      let totalAPagar = 0;
      for (const produto of this.produtos) {
        totalAPagar += produto.qtd * produto.precoUnit;
      }
      return totalAPagar;
    },
    calcularDesconto: function () {
      const totalItens = this.calcularTotalDeItens();
      const totalAPagar = this.calcularTotalAPagar();
  
      let desconto = 0;
      if (totalItens > 4) {
        const precoMaisBarato = Math.min(...this.produtos.map((p) => p.precoUnit));
        desconto = precoMaisBarato;
      } else if (totalAPagar > 10000) {
        desconto = totalAPagar * 0.1;
      }
      return desconto;
    },
    imprimirResumo: function () {
      const totalItens = this.calcularTotalDeItens();
      const totalAPagar = this.calcularTotalAPagar();
      const desconto = this.calcularDesconto();
  
      console.log(`Cliente: ${this.nomeDoCliente}`);
      console.log(`Total de itens: ${totalItens} itens`);
      console.log(`Total a pagar: R$ ${(totalAPagar / 100).toFixed(2)}`);
      console.log(`Desconto: R$ ${(desconto / 100).toFixed(2)}`);
      console.log(`Total com desconto: R$ ${((totalAPagar - desconto) / 100).toFixed(2)}`);
    },
    addProduto: function (produto) {
      const produtoExistente = this.produtos.find((p) => p.id === produto.id);
  
      if (produtoExistente) {
        produtoExistente.qtd += produto.qtd;
      } else {
        this.produtos.push(produto);
      }
    },
    imprimirDetalhes: function () {
      console.log(`Cliente: ${this.nomeDoCliente}\n`);
  
      for (const produto of this.produtos) {
        console.log(
          `Item ${produto.id} - ${produto.nome} - ${produto.qtd} und - R$ ${(produto.qtd * produto.precoUnit / 100).toFixed(2)}`
        );
      }
  
      this.imprimirResumo();
    },
};
  
  carrinho.imprimirDetalhes();
  
