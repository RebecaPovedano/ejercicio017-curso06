function operacion (a, b) {
    return a + b;
}

function resta (a, b) {
    return a - b;
}

module.exports = {
    suma: operacion,
    resta: resta
}