
console.log("===== EXERCÍCIO 1 =====");

let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
];

const imprimeProduto = (nome, preco) => {
    console.log(`Produto: ${nome} | Preço: ${preco}`);
};

carrinho.forEach(produto => {
    imprimeProduto(produto.nome, produto.preco);
});


console.log("\n===== EXERCÍCIO 2 =====");

let palavroes = [
    "Inconstitucionalíssimo",
    "Otorrinolaringologista",
    "Pneumoultramicroscopicossilicovulcanoconiose",
    "Oftalmotorrinolaringologista"
];

let tamanhos = palavroes.map(palavrao => palavrao.length);

console.log(tamanhos);


console.log("\n===== EXERCÍCIO 3 =====");

// Rest reúne vários argumentos em um array.
const contarNumeros = (...numeros) => numeros.length;

console.log("Rest:", contarNumeros(10, 20, 30));

// Spread espalha os elementos de um array.
const numeros = [1, 2, 3];
const novosNumeros = [...numeros, 4, 5];

console.log("Spread:", novosNumeros);

// Diferença:
// Rest reúne elementos.
// Spread espalha elementos.


console.log("\n===== EXERCÍCIO 4 =====");

const equipeMarketing = ['Joana', 'Marcela', 'Bruna'];
const equipeComercial = ['Talita', 'Luisa', 'Vitória'];

const timeCompleto = [...equipeMarketing, ...equipeComercial];

const realizaBrainstorm = equipe => {
    console.log("Equipe completa:", equipe);
};

realizaBrainstorm(timeCompleto);


console.log("\n===== EXERCÍCIO 5 =====");

const usuario = {
    email: 'usuario@email.com',
    nome: 'Maria',
    idade: 25
};

const { email, nome, idade } = usuario;

console.log(email);
console.log(nome);
console.log(idade);


console.log("\n===== EXERCÍCIO 6 =====");

const profissional = {
    titulo: 'Engenheiro de Software',
    departamento: 'Engenharia'
};

function isEngenheiro({ titulo, departamento }) {
    return titulo.indexOf("Engenheiro") > -1 &&
           departamento === 'Engenharia';
}

console.log(isEngenheiro(profissional)); // true

profissional.titulo = 'Marketing';

console.log(isEngenheiro(profissional)); // false


console.log("\n===== EXERCÍCIO 7 =====");

// Classe base de exemplo.
class VideoGame {
    constructor(nome, marca) {
        this.nome = nome;
        this.marca = marca;
    }
}

class PlayStation extends VideoGame {
    constructor(nome, marca, nEntradasUSB, voltagem, adicionais) {
        super(nome, marca);
        this.nEntradasUSB = nEntradasUSB;
        this.voltagem = voltagem;
        this.adicionais = adicionais;
    }
}

const meuPlayStation = new PlayStation(
    'PlayStation 5',
    'Sony',
    4,
    110,
    ['Controle sem fio', 'Volante']
);

console.log(meuPlayStation);


console.log("\n===== EXERCÍCIO 8 =====");

function simulaPromise(sucesso) {
    return new Promise((resolve, reject) => {
        if (sucesso) {
            resolve('ok');
        } else {
            reject('not ok');
        }
    })
    .then(mensagem => console.log(mensagem))
    .catch(mensagem => console.log(mensagem));
}

simulaPromise(false);
simulaPromise(true);


console.log("\n===== EXERCÍCIO 9 =====");

function simulaPromiseComDelay(sucesso, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (sucesso) {
                resolve('ok');
            } else {
                reject('not ok');
            }
        }, delay);
    })
    .then(mensagem => console.log(mensagem))
    .catch(mensagem => console.log(mensagem));
}

simulaPromiseComDelay(true, 2000);
simulaPromiseComDelay(false, 1000);


console.log("\n===== EXERCÍCIO 10 =====");

const promessa = Promise.resolve('dados');

promessa
    .then(data => {
        console.log(`resultado positivo: ${data}`);
        return data;
    })
    .then(data => {
        console.log(`resultado positivo 2: ${data}`);
    })
    .catch(erro => {
        console.log(`resultado negativo: ${erro}`);
    });
