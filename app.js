
import { obterInfoSistema } from './Log/teste.js';

/*const calc = require('./calculadora')
const calc2 = require('./calculadora2')

console.log("=============Calculadora==============");
console.log("Soma: ", calc.soma(2,3));
console.log("Multiplicação: ", calc.multiplicar(2,3));
console.log("Subtração: " + calc2.sub(2,3));
console.log("Divisão: " + calc2.div(2,3));
console.log("====================================");*/

const info = obterInfoSistema();
console.log()
console.log("Informações do Sistema Operacional:\n")
console.table(info);

