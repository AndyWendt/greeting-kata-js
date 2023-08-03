


module.exports = function(name) {
    name = normalizeName(name);

    let shouting = name === name.toUpperCase();
    let greating   = shouting ? "HELLO " : "Hello, ";
    let puntuation = shouting ? "!" : ".";

    return greating + name + puntuation;
}

function normalizeName(name) {
    name = name ? name : "my friend";
    if(Array.isArray(name)) {
        name = name[0] + " and " + name[1];
    }

    return name;
}