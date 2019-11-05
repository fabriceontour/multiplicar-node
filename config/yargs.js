//Cette config est pour verifier les parametres dans la console au moment de lancer l'appli

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias : 'l',
        default: 10
    }
}

const argv = require('yargs')
                .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
                .command('crear', 'Generar un archivo con la tabla de multiplicacion', opts)
                .help()
                .argv;


//Cet export est indispensable pour rendre l'objet argv accessible en dehors de ce fichier
module.exports = {
    argv
}


        