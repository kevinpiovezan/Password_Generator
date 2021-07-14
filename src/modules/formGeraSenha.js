import gerarSenha from './Geradores'
const senhaGerada = document.querySelector('.senha-gerada');
const input = document.querySelector('.input');
const numeros = document.querySelector('.numeros');
const maiusculas = document.querySelector('.maiusculas');
const minusculas = document.querySelector('.minusculas');
const simbolos = document.querySelector('.simbolos');


export default () => {
    document.addEventListener('click', (e) => {
        const el = e.target;
        if(el.classList.contains('btn-senha')){
        senhaGerada.innerHTML = gera()}
    })

    document.addEventListener('keyup', e => {
        if(e.keyCode === 13){
            senhaGerada.innerHTML = gera()
        }
    })
    
};
function gera() {
    const senha = gerarSenha(
        input.value,
        numeros.checked,
        maiusculas.checked,
        minusculas.checked,
        simbolos.checked
        );
    return senha;
}