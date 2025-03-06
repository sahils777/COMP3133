class Customer {
    firstName: string;
    lastName: string;

    constructor(first: string, last: string) {
        this.firstName = first;
        this.lastName = last;
    }

    greeter() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
}

// Creating an instance
let customer = new Customer("John", "Doe");
customer.greeter();
