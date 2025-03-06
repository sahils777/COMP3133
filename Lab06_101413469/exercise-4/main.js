"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_1 = require("./customer");
var customer1 = new customer_1.Customer("Bhide", "Gada", 29);
customer1.greeter();
console.log("Customer's age is ".concat(customer1.getAge()));
