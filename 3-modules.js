// commonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const { john, peter } = require("./4-names")
const sayHi = require("./5-utills")
const  data = require('./6-alternative-flavor')
require('./7-mind-grenade')


// console.log(data)
// sayHi('susan')
// sayHi(john)
// sayHi(peter)