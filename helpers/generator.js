
const fs = require('fs');
const colors = require('colors')

const generatorTable = async (base = 4, listar = false, limit = 10) => {
    let salida = '';
    let consola = '';
    try {
        if (listar) {
            console.log('= = = = = = = = = = = = = = = = = = ='.green)
            console.log(` ${'Tabla del:'.green} ${colors.blue(base)}`);
            console.log('= = = = = = = = = = = = = = = = = = ='.green)
        }

        for (let i = 1; i <= limit; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`
        }
        listar && console.log(consola)
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    } catch (error) {
        console.log(error)
    }

    return `tabla-${base}.txt`
}


module.exports = {
    generatorTable
}