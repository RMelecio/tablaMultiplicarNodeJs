const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();

crearArchivo( argv.b, argv.h, argv.l )
    .then( mensaje => console.log( mensaje ))
    .catch( mensaje => console.log(mensaje));
