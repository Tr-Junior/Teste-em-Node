var textoNormal;
var textoInvertido = [];

textoNormal = "Texto não invertido, para fins de teste";

for (var i = textoNormal.length - 1; i >= 0; i--) {
    textoInvertido += textoNormal[i];
}

console.log("Texto invertido:", textoInvertido);