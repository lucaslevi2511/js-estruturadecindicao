let nome;

//if(condição){construção}
if(nome){
    document.writeln("Seja Bem-Vindo "+nome+ '!');
} else {
    document.writeln("Aprende a Escrever")
}
document.write("<br></br>");
// let numero = prompt('Digite um número');
// if(numero % 2 == 0){
//     document.write('par');
// } else {
//     document.write('impar');
// }

let idade= prompt('Qual a sua idade ?')
let carta= prompt('Habilitado ?')

if(idade >= 18 && carta == 's' ){
    document.write('Pode dirigir');
} else if (idade >= 18 && carta == 'n') {
    document.write('Tire sua carteira');
} else{
    document.write('Não pode dirigir');
}
