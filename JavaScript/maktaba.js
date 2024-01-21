console.log("Hello World!");
// greeting.ts
function greet(name) {
    return "Hello, ".concat(name, "!");
}
var personName = "John";
var greetingMessage = greet(personName);
console.log(greetingMessage);
