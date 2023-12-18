import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import TextBox from "../components/TextBox";

describe('Pruebas sobre TextBox', () => {

    let article: HTMLElement;
    let button: HTMLElement;
    beforeEach(() => {
        render(<TextBox />);
        article = screen.getByRole('article', { name: 'artículo principal' });
        button = screen.getByRole('button', { name: 'Pulsa para cambiar color' });
    });

    test('El artículo se encuentra en el DOM', () => {
        expect(article).toBeInTheDocument();
    });

    test('El artículo tiene un color de fondo inicial', () => {
        expect(article.style.backgroundColor).toBe('dodgerblue');
    });

    test('Cuando pulse el botón cambia de color el artículo', () => {
        fireEvent.click(button);
        expect(article.style.backgroundColor).toBe('tomato');
    });

});