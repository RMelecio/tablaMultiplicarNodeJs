const fs = require('fs');
const colors = require('colors');
const crearArchivo = async( base, hasta, list ) => {
    
    try {

        let salida = '';
        let nombreArchivo = `./salida/tabla-${base}.txt`;
    
        salida += `==============================\n`.blue;
        salida += `     TABLA DEL ${ base }\n`.blue;
        salida += `==============================\n`.blue;
    
        for( let i = 1; i <= hasta; i++){
            salida += `${ base } ` +` X `.red + ` ${i} `.green + ` = ` + `${ i * base }\n`.cyan;
        }
    
        fs.writeFileSync(nombreArchivo, salida )

        if( list )
            console.log( salida );
    
        return `${nombreArchivo} creado`.yellow;

    }
    catch(err){
        throw err;
    }

}

module.exports = {
    crearArchivo
}