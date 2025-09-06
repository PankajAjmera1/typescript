"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // num.toUpperCase();
    return num + 2;
}
function signUpUser(name, email, isPaid) {
}
//arrow
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
function getValue(myValue) {
    if (myValue > 5) {
        return true;
    }
    return "ok";
}
var getHello = function (s) {
    return "good";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero, " ");
});
function consoleError(errMsg) {
    console.log(errMsg);
}
//recomended
function handleError(errMsg) {
    throw new Error(errMsg);
}
addTwo(5);
loginUser("hey", "hW@gmail.dev");
