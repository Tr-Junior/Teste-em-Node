function financial(x) {
    return Number.parseFloat(x).toFixed(2);
}

var sp = 67.83643,
    rj = 36.67866,
    mg = 29.22988,
    es = 27.16548,
    outr = 19.84953;

var total = sp + rj + mg + es + outr;

var percentualSp = (sp / total) * 100;
var percentualRj = (rj / total) * 100;
var percentualMg = (mg / total) * 100;
var percentualEs = (es / total) * 100;
var percentualOutr = (outr / total) * 100;

console.log("Porcentagem do faturamento de SP: " + financial(percentualSp) + "%");
console.log("Porcentagem do faturamento de RJ: " + financial(percentualRj) + "%");
console.log("Porcentagem do faturamento de MG: " + financial(percentualMg) + "%");
console.log("Porcentagem do faturamento de ES: " + financial(percentualEs) + "%");
console.log("Porcentagem do faturamento de Outros: " + financial(percentualOutr) + "%");
