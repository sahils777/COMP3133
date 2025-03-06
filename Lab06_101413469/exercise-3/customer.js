var Customer = /** @class */ (function () {
    function Customer(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello, ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer;
}());
// Creating an instance
var customer = new Customer("AlBhide", "Smith");
customer.greeter();
