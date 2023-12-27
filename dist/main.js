"use strict";
/*
    Como instalar TS nos projetos

    1. No terminal use o comando "npm run install typescript --save dev" para baixar o tc
    2. Criar o arquivo de config. "npx tsc --init"
    3. No arquivo de config. use Ctrl + F e pesquise por OutDir, habilite essa config com o valor "./dist"
    4. Pronto, comece a codar com a extensão ts nos arquivos. Para compilar use no terminal "npx tsc"

    Diferenças entre JS e TS

    1. Tipagem
    2. Identfica erros antes do deploy

*/
// Declarando simples
var nome = 'Felipe';
let value = 12; // inteiros como decimais
const vivo = true;
var pontos;
pontos = 200;
// Declarando Arrays
var nomes;
let values;
nomes = ['Felipe', 'Bob'];
// Declarando Tuplas/Registros/Matrizes
var tupla;
tupla = ['Felipe', 20, true];
// Declarando Objeto
let obj; // As propriedades são do tipo Any(auto declaraveis) - evite o máximo usar o tipo Any
var registro;
registro = {
    nome: 'Felipe',
    idade: 20,
    homem: true
};
let idades; // Para obj de mesmo tipo
idades = {
    Felipe: 1,
    Bob: 3,
    Neymar: 10
};
// Declarando Funções: Você pode tipar o retorno da função e os parâmetros dela.
function soma(a, b) {
    return a + b;
}
// Union : Você pode tipar dois valores para uma mesma variável usando |
var id; // e etc.. Ou ela é numero ou string, isso vai depender do dado que ela receber
var Id1 = 2;
var Id2 = 'Felipe';
var Id3 = false;
const user = {
    nome: 'Felipe',
    idade: 20
};
var filme1;
let aluno1 = {
    curso: 'ADS',
    idade: 20,
    nome: 'Felipe',
    nota: 5.78
};
