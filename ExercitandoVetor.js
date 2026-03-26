var vetores = ["São Paulo", "Rio de Janeiro", "Curitiba"]
console.log (vetores [0])
console.log (vetores [1] = "Salvador")
console.log (vetores [2])

// Dado o vetor [15, 5, 8], verifique se o valor na posição 1 é maior do que 10, se sim, retornar "Verdadeiro", se não, retornar "Falso".

var v = [15, 5, 8]

if (v[1] > 10) {console.log ("Verdadeiro")}
else {console.log ("Falso")}


//Dado o vetor [5, -3, 8], verifique se o valor na posição 1 é menor do que Zero. Se sim, substitua o elemento por zero. 
// Mostre todo o vetor no final.

var v1 = [5, -3, 8]

if (v1 [1] < 0) {console.log (v1 = [ v1 [0], 0, v1[2] ])}
else {console.log (v1)}

// Gerenciamento de Lista: Compras
//Objetivo: Aprender a utilizar métodos dinâmicos para inserir (push) e remover (shift) elementos.
//Entrada: Um vetor vazio [] e comandos para adicionar "Arroz", "Feijão" e "Leite".
//Saída: O item removido ("Arroz") e a lista final contendo apenas os dois itens restantes.

let alimentos = []
alimentos.push ("Arroz")
alimentos.push ("Feijão")
alimentos.push ("Leite")

let remocao = alimentos.shift()
console.log (alimentos)
console.log (remocao)

// Filtragem: Verificação de Maioridade
//Objetivo: Aplicar lógica condicional ou métodos de alta ordem (filter) para extrair subconjuntos de dados.
//Entrada: Um vetor de idades: [12, 18, 25, 10, 30, 15].
//Saída: Um novo vetor contendo apenas os valores >= 18.
//oi dm

///5
let vetoridades = [12, 18, 25, 10, 30, 15];
let maioresdeidades = vetoridades.filter(idade=> idade>=18 );
console.log (maioresdeidades)
//6
let acoes = ["Login", "Visualizar", "Logout"];
let acoessaida = acoes.pop()
console.log (acoes)
console.log (acoessaida)
///7
let nomes = ["Maria", "João"];
let adicaonome = nomes.unshift ("Ana");
console.log (nomes)
//8
let numerosgerais = [1,2,3,4,5,6];
let numerospares = numerosgerais.filter (numeros=> numeros%2===0)
console.log (numerospares)
//9
let numerosmaioresquedez = [5, 12, 8, 20, 3];
let maioresquedez = numerosmaioresquedez.filter (numeros=> numeros>10);
console.log (maioresquedez)
//10
let nomesmaisquequatro = ["Ana", "Bruno", "Carlos", "Eva"]
let nomescommaisquequatro = nomesmaisquequatro.filter (nomes=>nomes.length>4)
console.log (nomescommaisquequatro)
