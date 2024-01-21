var maktaba = (function () {
    function validateTwoNumbers(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            console.error('Input should be a number');
        }
    }
    return {
        power: function (x, y) {
            validateTwoNumbers(x, y);
            return Math.pow(x, y);
        }
    };
})();
