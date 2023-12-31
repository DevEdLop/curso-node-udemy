const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe:'Muestra la lista en consola'
                    })
                    .option('t', {
                        alias: 'limit',
                        type: 'number',
                        default: 10,
                        describe:'Data hasta donde desea multiplicar'
                    })
                    .check((argv, options)=> {
                        if(isNaN(argv.b)){
                            throw 'la base tiene que ser un numero'
                        }
                        return true;
                        
                    })
                    .argv


module.exports = argv;