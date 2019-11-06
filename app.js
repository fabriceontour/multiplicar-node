const argv = require('./config/yargs').argv;

const {crearArchivo, listarTabla} = require('./Multiplicar/multiplicar');

let comando = argv._[0];
switch(comando){
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Fichero ${archivo} creado correctamente`))
            .catch(e => console.log(e));
        break;

    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite)
            .then(result => {
                result.forEach(element => {
                    console.log(element);
                });
            })
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}
// Cette commande retourne un array. Les deux premieres positions, il y a des infos. 
// Ensuite, les positions sont valorisées par les parametres inseres dans la console
let argv2 = process.argv;
//let parametro = argv['2'];
//let base = parametro.split('=')[1];
console.log(argv.base);

