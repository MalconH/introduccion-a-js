//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

/*
Desafío de programación #1: Imprimí los números del 1 al 10

 Resultado: 10 9 8 7 6 5 4 3 2 1
*/

// SOLUCION #1:
function desafio1() {
    const DESDE = 1;
    const HASTA = 10;

    for (let i = DESDE; i <= HASTA; i++) {
        console.log(i);
    }
}

/*
 Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 1 3 5 ... 99
*/

// SOLUCION #2:
function desafio2() {
    const DESDE = 0;
    const HASTA = 100;

    for (let i = DESDE; i < HASTA; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

/*
Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63
*/

// SOLUCION #3:
function desafio3() {
    const HASTA = 10;

    for (let i = 1; i <= HASTA; i++) {
        console.log(`7 x ${i} = ${7 * i}`);
    }
}

// SOLUCION CON CUALQUIER NRO:
function desafio3v2() {
    const MULTIPLICANDO = 8; // nro a multiplicar
    const HASTA = 10;

    for (let i = 1; i <= HASTA; i++) {
        console.log(
            `${MULTIPLICANDO} x ${i} = ${MULTIPLICANDO * i}`
        );
    }
}

/*
Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81
*/

// SOLUCION #4:
function desafio4() {
    const MULTIPLICANDO_DESDE = 1;
    const MULTIPLICANDO_HASTA = 10; // nro izq.
    const MULTIPLICADOR_HASTA = 15; // nro der.

    for (
        let i = MULTIPLICANDO_DESDE;
        i <= MULTIPLICANDO_HASTA;
        i++
    ) {
        // Este bucle reccorre el multiplicando del 1 al HASTA
        for (let j = 1; j <= MULTIPLICADOR_HASTA; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}

/*
Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]

 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle
*/

// SOLUCION #5
function desafio5() {
    const numeros = [];
    let resultado = 0;

    for (let i = 1; i < 11; i++) {
        numeros.push(i);
    }

    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
    }

    console.log(resultado);
}

/*
Desafío de programación #6: Calcula 10! (10 factorial)

 10 * 9 * 8 * ... * 1
*/

// SOLUCION #6:
function desafio6() {
    const FACTORIAL = 10; // nro al que se le aplicará el factorial
    let resultado = 1;

    for (let i = FACTORIAL; i >= 1; i--) {
        resultado *= i;
    }

    console.log(resultado);
}

/* Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
*/

// SOLUCION #7:
function desafio7() {
    const numeros = [];
    let resultado = 0;

    // Agrega los nros 10 < n < 30 a un array
    for (let i = 11; i < 30; i++) {
        numeros.push(i);
    }

    // Suma todos los nros del array
    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
    }

    console.log(resultado);
}

/* Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
*/

// SOLUCION #8:
function desafio8(gradosCelsius) {
    const gradosFarenheit = gradosCelsius * 1.8 + 32;

    console.log(gradosFarenheit);
}

/* Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
*/

// SOLUCION #9:
function desafio9(gradosFarenheit) {
    const gradosCelsius = (gradosFarenheit - 32) / 1.8;

    console.log(gradosCelsius);
}

/* Desafío de programación #10: Calcula la suma de todos los números en un array de números
*/

// SOLUCION #10:
function sumarNumeros(numeros) {
    let total = 0;

    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }

    return total;
}

/* Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)
*/

// SOLUCION #11:
function calcularPromedio(numeros) {
    let total = 0;

    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    }

    return total / numeros.length;
}

/* Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos
*/

// SOLUCION #12:
function dameNumerosPositivos(numeros, incluyeCeros = false) {
    const numerosPositivos = [];

    if (!incluyeCeros) {
        for (let i = 0; i < numeros.length; i++) {
            numeros[i] > 0 ? numerosPositivos.push(numeros[i]) : "";
        }
    } else {
        for (let i = 0; i < numeros.length; i++) {
            numeros[i] >= 0 ? numerosPositivos.push(numeros[i]) : "";
        }
    }

    return numerosPositivos;
}

/* Desafío de programación #13: Find the maximum number in an array of numbers
*/

// SOLUCION #13:
function dameMayor(numeros) {
    let numeroMayor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        numeros[i] > numeroMayor ? (numeroMayor = numeros[i]) : "";
    }

    return numeroMayor;
}

/* Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión

Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
*/

// SOLUCION #14:
function dameNumerosFibonacci(cantidad) {
    const fibonacci = [0, 1];
    let numeroAnterior = 0;
    let numeroSiguiente = 1;

    for (let i = 1; i < cantidad; i++) {
        numeroSiguiente = fibonacci[i] + numeroAnterior;
        fibonacci.push(numeroSiguiente);
        numeroAnterior = fibonacci[i];
    }

    return fibonacci;
}

/* Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
*/

// SOLUCION #15
function numeroFibonacci(posicion) {
    if (posicion < 0)
        return null;

    if (posicion === 0)
        return 0;

    if (posicion === 1)
        return 1;

    return numeroFibonacci(posicion - 1) + numeroFibonacci(posicion - 2);
}

/* Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.
*/

// SOLUCION #16
function esPrimo(numero) {
    let divisores = 0;

    for (let i = numero; i > 0; i--) {
        if (numero % i === 0)
            divisores++;
    }

    return (divisores === 2);
}

/* Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10
*/

// SOLUCION #17
function sumarDigitos(numeroPositivo) {
    const digitos = String(numeroPositivo).split("");
    let sumaTotal = 0;

    for (let i = 0; i < digitos.length; i++) {
        sumaTotal += Number(digitos[i]);
    }

    return sumaTotal;
}

/* Desafío de programación #18: Imprimir los primeros 100 números primos
*/

// SOLUCION #18
function imprimirNumerosPrimos(cantidad) {
    for (let i = 0; i <= cantidad; i++) {
        if (esPrimo(i))
            console.log(i);
    }
}

// imprimirNumerosPrimos(100);

/* Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]
*/

// SOLUCION #19
function dameNumerosPrimos(desde, cantidad) {
    const numerosPrimos = [];

    for (let i = desde; numerosPrimos.length < cantidad; i++) {
        if (esPrimo(i))
            numerosPrimos.push(i);
    }

    return numerosPrimos;
}

/* Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]
*/

// SOLUCION #20
function rotarUnaPosicionALaIzquierda(array) {
    array.push(array.shift());

    return array;
}

/* Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]
*/

// SOLUCION #21
function rotarUnaPosicionALaDerecha(array) {
    array.unshift(array.pop());

    return array;
}

/* Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]
*/

// SOLUCION #22
function invertir(array) {
    const arrayInvertido = [];

    // Otra solución que no usa métodos de los Array pero no es tan "limpia"
    /* for (let i = 0, j = array.length - 1; i < array.length; i++, j--) {
        nuevoArray[i] = array[j];
    } */

    for (let i = 0; i < array.length; i++) {
        arrayInvertido.unshift(array[i]);
    }

    return arrayInvertido;
}

/* Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"
*/

// SOLUCION #23
function invertirString(string) {
    return invertir(string).join("");
}

/* Desafío de programación #24: Crear una función que reciba dos dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]
*/
function unir(array1, array2) {
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i]);
    }

    return array1;
}

/* Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos
*/

// SOLUCION #25:
function calcularDiferenciaSimetrica(numeros1 = [1, 1, 2, 3, 4, 9, 8, 15], numeros2 = [1, 12, 14, 15, 2, 5, 6, 7, 8]) {
    const resultadoDiferenciaSimetrica = [];

    for (let i = 0; i < numeros1.length; i++) {
        if (!numeros2.includes(numeros1[i])) {
            resultadoDiferenciaSimetrica.push(numeros1[i]);
        }
    }

    for (let i = 0; i < numeros2.length; i++) {
        if (!numeros1.includes(numeros2[i])) {
            resultadoDiferenciaSimetrica.push(numeros2[i]);
        }
    }

    return resultadoDiferenciaSimetrica.sort(function (a, b) {
        return a - b;
    });
}

/* Desafío de programación #26: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]
*/

// SOLUCION #26
function calcularRestaEntreConjuntos(numeros1, numeros2) {
    const resultadoRestaEntreConjuntos = [];

    for (let i = 0; i < numeros1.length; i++) {
        if (!numeros2.includes(numeros1[i])) {
            resultadoRestaEntreConjuntos.push(numeros1[i]);
        }
    }

    return resultadoRestaEntreConjuntos;
}

/* Desafío de programación #27: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]
*/

// SOLUCION #27
function eliminarRepetidos(numeros) {
    const resultadoNumeros = [];

    for (let i = 0; i < numeros.length; i++) {
        let contadorRepeticiones = -1;

        for (let j = 0; j < numeros.length; j++) {
            if (numeros[i] === numeros[j]) {
                contadorRepeticiones++;
            }
        }

        if (!contadorRepeticiones) {
            resultadoNumeros.push(numeros[i]);
        }
    }

    return resultadoNumeros;
}

// ==== FALTAN TRADUCIR

/* Desafío de programación #28: Calculate the sum of first 100 prime numbers
*/

// SOLUCION #28
function sumarNumerosPrimos(cantidad) {
    const numerosPrimos = [];
    let sumaTotal = 0;

    for (let numero = 0; numerosPrimos.length < cantidad; numero++) {
        let divisores = 0;
        for (let j = numero; j > 0; j--) {
            if (numero % j === 0) divisores++;
        }

        if (divisores === 2) {
            numerosPrimos.push(numero);
            sumaTotal += numero;
        }
    }

    return sumaTotal;
}

/* Desafío de programación #29: Print the distance between the first 100 prime numbers
*/

// SOLUCION #29 - La distancia entiendo que sería cuántos nros hay entre nro primo(n1) y nro primo (n2)

function dameDistanciaEntrePrimos(cantidad) {
    const distanciaEntrePrimos = [];
    let numeroPrimoAnterior = 2; // 2 es el primer nro primo
    let numerosPrimosEncontrados = 0;

    for (let i = 0; numerosPrimosEncontrados < cantidad; i++) {
        let divisores = 0;

        for (let j = i; j > 0; j--) {
            if (i % j === 0) divisores++;
        }

        if (divisores === 2) {
            numerosPrimosEncontrados++;
            distanciaEntrePrimos.push(i - numeroPrimoAnterior);
            numeroPrimoAnterior = i;
        }
    }

    return distanciaEntrePrimos;
}

/* Desafío de programación #30-a: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
*/

function sumarStrings(numero1, numero2) {
    return String(Number(numero1) + Number(numero2));
}

/* Desafío de programación #30-b: Create a function that will add two positive numbers of indefinite size. The numbers are received as strings and the result should be also provided as string.
*/

/* Desafío de programación #31-a. Create a function that will return the number of words in a text
*/

/* Desafío de programación #31-b. Create a function that will return the number of words in a text
*/

/* Desafío de programación #32. Create a function that will capitalize the first letter of each word in a text
*/

/* Desafío de programación #33. Calculate the sum of numbers received in a comma delimited string
*/

/* Desafío de programación #34. Create a function that will return an array with words inside a text
*/

/* Desafío de programación #35. Create a function to convert a CSV text to a “bi-dimensional” array
*/

/* Desafío de programación #36. Create a function that converts a string to an array of characters
*/

/* Desafío de programación #37. Create a function that will convert a string in an array containing the ASCII codes of each character
*/

/* Desafío de programación #38. Create a function that will convert an array containing ASCII codes in a string
*/

/* Desafío de programación #39. Implement the Caesar cypher
*/

/* Desafío de programación #40. Implement the bubble sort algorithm for an array of numbers
*/

/* Desafío de programación #41. Create a function to calculate the distance between two points defined by their x, y coordinates
*/

/* Desafío de programación #42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
*/

/* Desafío de programación 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
*/

/* Desafío de programación #44. Create a function that will convert a string containing a binary number into a number
*/

/* Desafío de programación #45. Create a function to calculate the sum of all the numbers in a jagged array (array contains numbers or other arrays of numbers on an unlimited number of levels)
*/

/* Desafío de programación #46-a. Find the maximum number in a jagged array of numbers or array of numbers
*/

/* Desafío de programación #46-b. Find the maximum number in a jagged array of numbers or array of numbers
*/

/* Desafío de programación #47. Deep copy a jagged array with numbers or other arrays in a new array
*/

/* Desafío de programación #48. Create a function to return the longest word(s) in a string
*/

/* Desafío de programación #49. Shuffle an array of strings
*/

/* Desafío de programación #50. Create a function that will receive n as argument and return an array of n unique random numbers from 1 to n.
*/

/* Desafío de programación #51. Find the frequency of characters inside a string. Return the result as an array of objects. Each object has 2 fields: character and number of occurrences.
*/

/* Desafío de programación #52. Calculate Fibonacci(500) with high precision (all decimals)
*/

/* Desafío de programación #53. Calculate 70! with high precision (all decimals)
*/
