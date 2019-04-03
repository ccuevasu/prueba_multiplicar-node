//Requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('================'.green);
    console.log(`Tabla de ${base}`.green);
    console.log('================'.green);

    for (let x = 1; x <= limite; x++) {
        console.log(`${base} * ${x} = ${base * x}`);
    }
}

let crearArchivo = (base, limite = 10) => {
        return new Promise((resolve, reject) => {
            if (!Number(base)) {
                reject(`El elemento ingresado "${base}" no corresponde a un Número`);
                return;
            }

            let data = '';
            for (let x = 1; x <= limite; x++) {
                data += `${base} * ${x} = ${base * x}\n`;
            }

            fs.writeFile(`out/tabla_${base}_al_${limite}.txt`, data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(`tabla_${base}_al_${limite}.txt`);
            });
        });
    }
    /*
    let crearArchivo = async(base) => {
        let data = '';
        for (let x = 1; x <= 10; x++) {
            data += `${base} * ${x} = ${base * x}\n`;
        }
        fs.writeFile(`out/tabla_${base}.txt`, data, (err) => {
            if (err)
                throw err;
            else
                return `tabla_${base}.txt`;
        });
    }
    */
module.exports = {
    crearArchivo,
    listarTabla
}