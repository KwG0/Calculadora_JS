/* Calculadora desenvolvida no curso "Sintaxe Básica em Javascript" pela profª Diana Martine */

function calculadora() {
    const operacao = (prompt('Escolha uma opção: \n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão Real (/) \n 5 - Divisão Inteira (%) \n 6 - Potenciação (**)'));

    if (!operacao || operacao >= 7) {
        alert ('Erro - Operação Inválida');
        calculadora()
    } else {
        let n1 = Number (prompt("insira o primeiro valor:"));
        let n2 = Number (prompt("Insira o segundo valor:"));
        let resultado;

        if (!n1 || !n2) {
            alert ('Erro - Parâmetros Inválidos');
            calculadora()
        } else {

            function Soma() {
                resultado = n1 + n2;
                alert (`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }

            function Subtracao() {
                resultado = n1 - n2;
                alert (`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }

            function Multiplicacao() {
                resultado = n1 * n2;
                alert (`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoReal() {
                resultado = n1 / n2;
                alert (`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }

            function divisaoInteira() {
                resultado = n1 % n2;
                alert (`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao();
            }

            function Potenciacao() {
                resultado = n1 ** n2;
                alert (`${n1} elevado a ${n2}ª potência é ${resultado}`);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt ('Deseja fazer outra operação? \n 1-Sim \n 2-Não');
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert ('Até mais!');
                } else {
                    alert ('Digite uma opção válida');
                    novaOperacao();
                }
            }
        }
    }

    if (operacao == 1) {
        Soma();
    } else if (operacao == 2) {
        Subtracao();
    } else if (operacao == 3) {
        Multiplicacao();
    } else if (operacao == 4) {
        divisaoReal();
    } else if (operacao == 5) {
        divisaoInteira();
    } else if (operacao == 6) {
        Potenciacao();
    }

    switch (operacao) {
       case 1:
           Soma();
           break;
           case 2:
               Subtracao();
               break;
               case 3:
                   Multiplicacao();
                   break;
                   case 4:
                       divisaoReal();
                       break;
                       case 5:
                           divisaoInteira();
                           break;
                           case 6:
                               Potenciacao();
                               break; 
    }
}

calculadora();