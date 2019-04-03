const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch((err) => console.log(err));

        break;
    default:
        console.log(`El Comando: [${comando}] no es reconocido. `);

}

const multiplicar = require('./multiplicar/multiplicar');
//let argv2 = process.argv;


//console.log(argv.base);
//console.log(argv.limite);




//let param = argv[2];
//let base = param.split('=')[1];
//

//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado: ${archivo}`))
//    .catch((err) => console.log(err));