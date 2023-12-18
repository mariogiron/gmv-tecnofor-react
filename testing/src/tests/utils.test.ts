import { describe, expect, test } from "vitest";
import { mayorDeEdad } from "../utils";

describe('pruebas sobre el método mayorDeEdad', () => {

    test('debe devolver un boolean', () => {
        expect(typeof mayorDeEdad(19)).toBe('boolean');
        expect(mayorDeEdad(19)).toBeTypeOf('boolean');
    });

    test('si es mayor de edad devuelve TRUE', () => {
        expect(mayorDeEdad(34)).toBeTruthy();
    });

    test('si es menor de edad devuelve FALSE', () => {
        expect(mayorDeEdad(7)).toBeFalsy();
    });

    test('si la edad es negativa devuelve Null', () => {
        expect(mayorDeEdad(-12)).toBeNull();
    });

});