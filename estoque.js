let produtos = [3,4,0,15,67]
let semestoque= 0;
let estqbaixo = 0;
let pdtemestoque = 0;
for (i = 0; i < produtos.length; i++){
pdtemestoque = produtos[i]
if (pdtemestoque == 0){
semestoque++
} if (pdtemestoque < 5){
estqbaixo++
}
}console.log ("A quantidade de produtos sem estoque é: ", semestoque)
console.log ("A quantidade de produtos com estoque baixo é: ", estqbaixo)

