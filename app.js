'use strict';

const player = {
    name: 'nice',
    sayHello: function (otherPersonName) {
        console.log('hello!' + otherPersonName + 'nice to meet you');
    },
};

player.sayHello('lynn');
player.sayHello('nico');

function plus(a, b) {
    console.log(a + b);
}

plus(5, 5);
