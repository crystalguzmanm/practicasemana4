const helloWorld = require('jest');

test('debería imprimir "¡Hola, mundo!"', () => {
    console.log = jest.fn();
    require('../index');
    expect(helloWorld()).toBe("Hola Mundo");
});