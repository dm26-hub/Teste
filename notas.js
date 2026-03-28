let notas = [7,9,10,8,5,4,7]
let somanotas = 0;
let media = 0;
let maiornota = 0;
let contadornotas = 0; 
let contadorreprovados = 0;
let contaprovados = 0; 
for (i = 0; i <notas.length; i++){
somanotas += notas[i]
media = somanotas/7    
if (somanotas >= 7){
        contaprovados++
} if (somanotas <7){
    contadorreprovados++
}
   
}
console.log ("A média das notas é: ", media)
console.log ("A quantidade de alunos aprovados é: ", contaprovados)
console.log ("A quantidade de alunos reprovados é: ", contadorreprovados)