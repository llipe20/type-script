/* 
    Como instalar TS nos projetos

    1. No terminal use o comando "npm install typescript --save-dev" para baixar o tc
    2. Criar o arquivo de config. "npx tsc --init"
    3. No arquivo de config. use Ctrl + F e pesquise por OutDir, habilite essa config com o valor "./dist"
    4. Pronto, comece a codar com a extensão ts nos arquivos. Para compilar use no terminal "npx tsc"

    Diferenças entre JS e TS

    1. Tipagem 
    2. Identfica erros antes do deploy

*/

// Declarando simples

var nome: String = 'Felipe'
let value: Number = 12 // inteiros como decimais
const vivo: Boolean = true

var pontos: Number
pontos = 200

// Declarando Arrays

var nomes: String[]
let values: Number[]

nomes = ['Felipe','Bob']

// Declarando Tuplas/Registros/Matrizes

var tupla: [String, Number, Boolean]

tupla = ['Felipe', 20, true]

// Declarando Objeto

let obj: Object // As propriedades são do tipo Any(auto declaraveis) - evite o máximo usar o tipo Any
var registro: {nome:String, idade:Number, homem:Boolean}

registro = {
    nome : 'Felipe',
    idade : 20,
    homem : true
}

let idades: Record<string, Number> // Para obj de mesmo tipo

idades = {
    Felipe : 1,
    Bob : 3,
    Neymar : 10
}

// Declarando Funções: Você pode tipar o retorno da função e os parâmetros dela.

function soma(a:number, b:number) : number {
    return a + b
}

// Union : Você pode tipar dois valores para uma mesma variável usando |

var id: number | string | boolean // e etc.. Ou ela é numero ou string, isso vai depender do dado que ela receber

// Type Alias: Criar tipagem 

type Id = number | string | boolean // Agora Id é um tipo
var Id1: Id = 2
var Id2: Id = 'Felipe'
var Id3: Id = false

type Usuario = { nome:string, idade:number }
const user: Usuario = {
    nome : 'Felipe',
    idade : 20
}

// Interface: Forma alternativa de declarar Objetos

interface Filme {
    nome : string,
    valor : number
}

var filme1: Filme

// Extendendo interfaces: Uma interface que pode herdar os atributos de outra interface e types

interface Pessoa { nome:string, idade:number }
interface Aluno extends Pessoa { curso:string, nota?:number } // nota é uma propriedade opcional - posso preencher sim ou não

let aluno1: Aluno = {
    curso: 'ADS',
    idade: 20,
    nome: 'Felipe',
    nota: 5.78
}
