const Logger = require('logplease');
const logger = Logger.create('utils');
const numeros = require('./numeros.js');
console.log(numeros.esPar(3));
console.log(numeros.esPar(101));
console.log(numeros.esPar(201));
console.log(numeros.esPar(202));
console.log(numeros.esPar(100));

if (numeros.esPar(2)) {
    logger.info("El numero es par");
} else logger.error("El numero no es par");

if (numeros.esPar(3)) {
    logger.info("El numero es par");
} else logger.error("El numero no es par");

if (numeros.esPar(101)) {
    logger.info("El numero es par");
} else logger.error("El numero no es par");

if (numeros.esPar(201)) {
    logger.info("El numero es par");
} else logger.error("El numero no es par");

if (numeros.esPar(202)) {
    logger.info("El numero es par");
} else logger.error("El numero no es par");

if (numeros.esPar(100)) {
    logger.info("El numero es par");
} else logger.error("El numero no es par");
