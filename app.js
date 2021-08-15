'use strict';

const calculator = {
    add: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    divide: function (a, b) {
        console.log(a / b);
    },
    multiple: function (a, b) {
        console.log(a * b);
    },
    powerOf: function (a, b) {
        console.log(a ** b);
    },
};

calculator.add(2, 5);
calculator.minus(2, 5);
calculator.divide(2, 5);
calculator.multiple(2, 5);
calculator.powerOf(2, 5);
