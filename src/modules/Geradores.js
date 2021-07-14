const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65,91));
const geraMinuscula = () => String.fromCharCode(rand(97,123));
const geraNumero = () => String.fromCharCode(rand(48,58));
const simbolos = ',./;`!@#$%ˆ&*()_+-=|}{[]';
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];

export default function gerarSenha(qtd, mai, min, num, sim){
    const senhaArray = [];

    for(let i = 0; i < qtd; i++){
        mai && senhaArray.push(geraMaiuscula());
        min && senhaArray.push(geraMinuscula());
        num && senhaArray.push(geraNumero());
        sim && senhaArray.push(geraSimbolos());
    }
    return senhaArray.join('').slice(0, qtd);
}