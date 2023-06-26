//ejercicio 1
function parOimpar (num){
    if (num % 2 === 0){
        console.log(num + ' es un muero par');
    } else {
        console.log(num + ' es un munero impar')
    }
}
parOimpar(4)
//ejercicio 2
function esElMayor (num1, num2){
    if (num1 > num2){
        console.log (num1 + ' es el mayor');
    } else if  (num2 > num1){
        console.log (num2 + ' es el mayor')
    } else {(num1 == num2)
        console.log ('los dos numeros son iguales')
    }   
}
esElMayor (12, 3)
//ejercicio 3
function esMultiplo (num){
    if (num % 5 === 0){
        console.log (num + ' es multiplo de 5');
    } else {
        console.log (num + ' no es multiplo de 5')
    }
}
esMultiplo(6)

//ejercicio 4

function contador(num){
for (let i = 0; i<= num; i++){
console.log(i)
}
}
contador(6)

//ejercicio 5

function imprNumXPal(pal, num){
    for(let i = 0; i < num ; i++){
        console.log(pal)
    }
}
imprNumXPal("cuanto", 5)

//ejercicio 6

function escribirValores (array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

const numeros = [1, 2, 3];

escribirValores(numeros);
//ejercicio 7
function imprValores(array){
    for (let i = 0; i < array.length; i++){
        if (i != 4){
            console.log(array[i]);
        }
    }
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
imprValores (numbers);
//ejercicio 8

function multiploDeAnterior(array, numer){
    for (let i = 0; i < array.length; i++){
        console.log(array[i] * numer)
    }
}
multiploDeAnterior ([1, 2, 3, 4], 3 )