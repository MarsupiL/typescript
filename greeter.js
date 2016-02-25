function helloEnglish(g) {
    g.greet('Hello there!'); // OK
    // g.greet(42); // Not OK -- 42 is not a string
    // g.greep('Hi'); // Not OK -- 'greep' is not a member of 'Greetable'
}
var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        return "<h1>" + this.greeting + "</h1>";
    };
    return Greeter;
}());
;
var greeter = new Greeter("Hello, world!");
document.body.innerHTML = greeter.greet();
