var anterior = 0, proximo = 1, soma = 0;

let numero = [0, 1, 1, 2, 3, 5, 10, 12, 22, 33, 43, 89, 144, 233, 377, 610, 987, 1597, 2584];

for (var i = 0; i < numero.length; i++) {
    soma = anterior + proximo;
    anterior = proximo;
    proximo = soma;

    if (numero[i] == 0 || numero[i] == 1 || numero[i] == soma) {
        console.log('O número %d está na sequência de Fibonacci', numero[i]);
    } else {
        console.log('O número %d não está na sequência de Fibonacci', numero[i]);
    }
}
