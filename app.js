const argv = require('./config/yargs');

const { generatorTable } = require('./helpers/generator');

require('colors')

console.clear();

// console.log(process.argv)
// console.log(argv)
// console.log('base: yargs', argv.base)

// const [, , arg3 = 'base=5'] = process.argv
// const [, base = 5] = arg3.split('=')
// console.log("🚀 ~ file: app.js:12 ~ base:", base)
// console.log(arg3)
generatorTable(argv.b, argv.l, argv.t)
    .then((res) => console.log(res.rainbow, 'create'))
    .catch(err => console.log(err))