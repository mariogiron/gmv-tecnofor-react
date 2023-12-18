import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { describe, expect, test, vi } from "vitest";
import Formulario from "../components/Formulario";

describe('Pruebas sobre formulario', () => {

    test('el formulario se envía correctamente', async () => {

        const testData = { text: 'Tarea de prueba', priority: 'medium' };

        const mockFn = vi.fn();
        render(<Formulario createTask={mockFn} />)

        // Recuperar los elementos del DOM del formulario
        const inputText = screen.getByLabelText('Texto');
        const inputPriority = screen.getByLabelText('Prioridad');
        const button = screen.getByRole('button', { name: /crear nueva tarea/i })

        await userEvent.clear(inputText);
        await userEvent.type(inputText, testData.text);

        await userEvent.clear(inputPriority);
        await userEvent.type(inputPriority, testData.priority);

        await userEvent.click(button);

        expect(mockFn).toHaveBeenCalled();

        const returnData = mockFn.mock.calls[0][0];
        expect(returnData).toMatchObject(testData);

    });

});