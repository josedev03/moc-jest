import {Suma} from './Suma'

describe("Pruebas Generales", () => {
  const result = 10;

  const suma = new Suma()

  test("instancia de clase ", () => {
    expect(suma).toBeDefined()
  });

  test('ambos numeros 0', () => {
    const result = suma.suma(0, 0)
    expect(result).toEqual(0)
  })

  test('primer numero 0', () => {
    const result = suma.suma(0, 5)
    expect(result).toEqual(5)
  })

  test('segundo numero 0', () => {
    const result = suma.suma(7, 0)
    expect(result).toEqual(7)
  })

  test("metodo suma", () => {
    const result = suma.suma(3, 5)
    expect(result).toEqual(8)
  })
});