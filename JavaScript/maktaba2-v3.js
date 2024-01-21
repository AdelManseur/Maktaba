var maktaba = (function () {
    function validateNember(x) {
        if ( typeof x !== 'nember' ) {
            console.error('Input should be a nember');
        }

        return {
            square: function (x) {
                validateNember(x);

                return x*x;
            }
        };
    }
})();