var maktaba = (function () {
    function validateElementName(name, options) {
        if (options === void 0) { options = {}; }
        var _a = options.id, id = _a === void 0 ? ' ' : _a, _b = options.className, className = _b === void 0 ? ' ' : _b, _c = options.innerHTML, innerHTML = _c === void 0 ? ' ' : _c, _d = options.img, img = _d === void 0 ? ' ' : _d, _e = options.isCreated, isCreated = _e === void 0 ? true : _e;
        if (typeof name !== 'string') {
            throw new Error('Input must be a string');
        }
        if (typeof id !== 'string') {
            throw new Error('ID must be a string');
        }
        if (className !== undefined) {
            if (typeof className === 'string' || Array.isArray(className)) { /* Valid case for a single class or an array of classes*/ }
            else {
                throw new Error('Class must be a string or an array of strings');
            }
        }
        if (typeof innerHTML !== 'string') {
            throw new Error('innerHTML must be a string');
        }
        if (typeof img !== 'string') {
            throw new Error('Img must be a string');
        }
        if (typeof isCreated !== 'boolean') {
            throw new Error('isCreated must be a boolean');
        }
    }
    return {
        create: function (name, options) {
            var _a;
            if (options === void 0) { options = {}; }
            validateElementName(name, options);
            var _b = options.id, id = _b === void 0 ? ' ' : _b, _c = options.className, className = _c === void 0 ? ' ' : _c, _d = options.innerHTML, innerHTML = _d === void 0 ? ' ' : _d, _e = options.img, img = _e === void 0 ? ' ' : _e, _f = options.isCreated, isCreated = _f === void 0 ? true : _f;
            var createdElement;
            switch (name) {
                case 'button':
                case 'textarea':
                case 'div':
                case 'a':
                case 'input':
                case 'output':
                case 'br':
                case 'p':
                case 'h1':
                case 'h2':
                case 'h3':
                case 'h4':
                case 'h5':
                case 'h6':
                case 'strong':
                case 'em':
                case 'span':
                case 'q':
                case 'abbr':
                case 'cite':
                case 'code':
                case 'blockquote':
                    createdElement = document.createElement(name);
                    break;
                default: throw new Error("Unsupported element type: ".concat(name));
            }
            createdElement.setAttribute('id', id);
            if (className !== undefined) {
                if (typeof className === 'string') {
                    createdElement.classList.add(className);
                }
                else if (Array.isArray(className)) {
                    (_a = createdElement.classList).add.apply(_a, className);
                }
            }
            createdElement.innerHTML = innerHTML;
            document.body.appendChild(createdElement);
            var image = document.createElement('img');
            image.src = img;
            createdElement.appendChild(image);
            if (!isCreated) {
                createdElement.remove();
            }
            console.log("Type: ".concat(name, ", ID: ").concat(id, ", Class: ").concat(className, ", innerHTML: ").concat(innerHTML, ", isCreated: ").concat(isCreated));
        },
        remove: function (id) {
            var elementToRemove = document.getElementById(id);
            if (elementToRemove) {
                elementToRemove.remove();
            }
            else {
                console.warn("Element with ID: '".concat(id, "', not found."));
            }
        },
        clickRemoveMe: function (id) {
            var elementToAddEventListener = document.getElementById(id);
            if (elementToAddEventListener) {
                elementToAddEventListener.addEventListener('click', function () {
                    elementToAddEventListener.remove();
                });
            }
            else {
                console.warn("Element with ID: '".concat(id, "', not found."));
            }
        },
    };
})();
