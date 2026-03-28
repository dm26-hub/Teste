let temp = [81,95,90,92,95,97,87]
let mediatemp = 0;
let critico = 0;
let soma = 0;
let contador = 0
for (i = 0; i < temp.length; i++)
   soma += temp [i]
mediatemp = soma/7

if (mediatemp > 90) {console.log ("A TEMPERATURA ESTÁ ACIMA DO RECOMENDADO")}
else {console.log ("Está tudo normal")}
console.log ("A média da temperatura é:", mediatemp)
contador = temp.filter (temp => temp > 80).length
console.log ("Temperaturas acima de 80 = ", contador)

//


