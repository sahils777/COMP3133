export class Customer {
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(first: string, last: string, age: number) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }

    greeter() {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }

    getAge(): number {
        return this.age;
    }
}
