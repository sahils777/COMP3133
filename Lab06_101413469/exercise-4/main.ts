import { Customer } from "./customer";

const customer1 = new Customer("Bhide", "Gada", 29);
customer1.greeter();
console.log(`Customer's age is ${customer1.getAge()}`);
