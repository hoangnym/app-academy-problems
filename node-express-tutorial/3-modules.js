// CommonJS, every file is module (by default)
// Modules => encapsulated code (only share minimum)
const { john, peter } = require("./4-name")
const sayHi = require("./5-utils")

sayHi("susan")
sayHi(john)
sayHi(peter)