var maktaba = (function () {
    function validateNumber(x) {
        if (typeof x !== 'number') {
            console.error('Input should be a number');
        }
    }
    return {
        square: function (x) { validateNumber(x); return x * x; },
        squareCube: function (x) { validateNumber(x); return x * x * x; },
        squareQuartic: function (x) { validateNumber(x); return x * x * x * x; },
        squareRoot: function (x) { validateNumber(x); return Math.sqrt(x); }
    };
})();
