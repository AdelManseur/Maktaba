var maktaba = (function () {
    function validateNember(x) {
        if ( typeof x !== 'number' ) {
            console.error('Input should be a nember');
        }
     }   

        return {
            square: function (x) {
                validateNember(x);

                return x*x;
            },

            squareRoot: function (x) {
                validateNember(x);

                return sqrt(x);
            }
        };
})();