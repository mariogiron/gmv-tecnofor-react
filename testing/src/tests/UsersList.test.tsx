import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import UsersList from "../components/UsersList";

describe('Pruebas sobre UserList', () => {

    test('se realiza la carga de datos de manera correcta', async () => {
        render(<UsersList />);

        const element = await screen.findByText('Mario');

        expect(element).toBeInTheDocument();
    });

});