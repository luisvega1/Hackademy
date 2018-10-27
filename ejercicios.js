// Luis Eduardo Vega López
// 01 Ejercicio
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
// 02 Ejercicio
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?


// Ejercicio 1
    let suma = 0;
    for( var i = 1; i < 1000; i++){
        if(i%5 == 0 || i%3 == 0){
            suma+=i;
        }
    }
console.log(suma);

// Ejercicio 2
let primos = (num) => {
    let numPrim = [2];
    for(let i = 3; numPrim.length <= num; i+= 2) {
        if(numPrim.every(v => i % v !== 0)) {
            numPrim.push(i);
            if(numPrim.length === num){
                return i;
            }
        } 
    }
}
console.log(primos(10001));

