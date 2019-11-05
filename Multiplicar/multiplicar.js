// les requires
const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise ((resolve, reject) => {
        if (!Number(base)) {
            reject ('La base insertada no es un numero');
            return;
        }

        let result = [];
        for (i = 1;i <= limite; i++){
            result.push(`${base} * ${i} = ${base * i}`);
        }
        resolve(result);
    });
}

let crearArchivo = (base, limite) => {
    return new Promise ((resolve, reject) => {
        let data = '';
        if(!Number(base)){
            //Avec le reject, le code continue de s'executer
            reject('No es un numero');
            return;
        }

        for(i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        };

        let nomFichier = `tablas/tabla-${base}.txt`;
        fs.writeFile(nomFichier, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve(nomFichier);
        });
    })
}

//Cette commande permet d'exporter ce que l'on veut de ce fichier. Pour etre utilise autre part
module.exports = {
    crearArchivo,
    listarTabla
}


