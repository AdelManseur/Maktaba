var maktaba = (function () {
    function validateTwoNumbers(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            console.error('Input should be a number');
        }
    }
    return {
        add: function (x, y) { validateTwoNumbers(x, y); return x + y; },
        sub: function (x, y) { validateTwoNumbers(x, y); return x - y; },
        mul: function (x, y) { validateTwoNumbers(x, y); return x * y; },
        div: function (x, y) { validateTwoNumbers(x, y); return x / y; },
        pow: function (x, y) { validateTwoNumbers(x, y); return Math.pow(x, y); }
    };
})();
