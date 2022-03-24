🏋🏽‍♀️ Treino de JavaScript

Enunciado
Uma revendedora de carros usados paga a seus vendedores um salário fixo de R$2000,00 por mês. Os vendedores recebem uma comissão para cada carro vendido, no valor de R$100 + 5% do valor do carro.

Crie uma função que leia o número de carros vendidos por uma pessoa (qtdeCarrosVendidos, um número inteiro) e o valor total de suas vendas do mês (valorTotalVendas, também um número, correspondente ao valor total recebido por todas as vendas efetuadas).

Retorne o salário final do mês do funcionário com base nesses valores.

```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let salarioFixo = 2000;
 let comissao = (valorTotalVendas / qtdeCarrosVendidos) * 0.05;
 let salarioFinal  = salarioFixo + (comissao * qtdeCarrosVendidos) + ( 100 * qtdeCarrosVendidos);

 if (qtdeCarrosVendidos===0 && valorTotalVendas === 0){
    return salarioFixo
 }else {
    return salarioFinal
 }
}
```
