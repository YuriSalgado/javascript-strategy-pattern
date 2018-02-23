var Calculator = function() {
    this.company = "";
};
 
Calculator.prototype = {
    setOperation: function(operation) {
        this.operation = operation;
    },
 
    calculate: function(a, b) {
        return this.operation.calculate(a, b);
    }
};
 
var Multiply = function() {
    this.calculate = function(a, b) {
        // calculations...
        return a * b;
    }
};
 
var Subtract = function() {
    this.calculate = function(a, b) {
        // calculations...
        return a - b;
    }
};
 
var Add = function() {
    this.calculate = function(a, b) {
        // calculations...
        return a + b;
    }
};
 
// log helper
 
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { log += msg + "\n"; },
        show: function() { alert(log); log = ""; }
    }
})();
 
function run() {
    var a = 4;
    var b = 9;
 
    // the 3 strategies
 
    var multiply = new Multiply();
    var subtract = new Subtract();
    var add = new Add();
 
    var calculator = new Calculator();
 
    calculator.setStrategy(multiply);
    log.add("Multiply Strategy: " + calculator.calculate(a, b));
    calculator.setStrategy(subtract);
    log.add("Subtract Strategy: " + calculator.calculate(a, b));
    calculator.setStrategy(add);
    log.add("Add Strategy: " + calculator.calculate(a, b));
 
    log.show();
}