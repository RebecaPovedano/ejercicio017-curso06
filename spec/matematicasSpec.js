

describe("Test matematicas", function() {
    var calculadora = require('../src/matematicas');
    it("Debería sumar", function() {
        var resultado = calculadora.suma(3, 4);
        expect(resultado).toEqual(7);
    });

    it("La suma no es correcta", function() {
        var resultado = calculadora.suma(3, 4);
        expect(resultado).not.toEqual(6);
    });

    it("La resta es correcta", function() {
        var resultado = calculadora.resta(3, 4);
        expect(resultado).toEqual(-1);
    });

    it("La resta es incorrecta", function() {
        var resultado = calculadora.resta(3,4);
        expect(resultado).not.toEqual(0);
    });

    it("Declaraciones", function() {
        expect(calculadora).toBeDefined();
        expect(calculadora).not.toBeUndefined();
        expect(calculadora).not.toBeNull();

        var variable2;

        expect(variable2).toBeUndefined();
        expect(variable2).not.toBeDefined();

        variable2 = null;

        expect(variable2).toBeNull();

        variable2 = 1;

        expect(variable2).not.toBeNull();
        expect(variable2).toBe(1);
        expect(variable2).toEqual(1);
    });
  });
  
