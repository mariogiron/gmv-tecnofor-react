import { afterAll, afterEach, beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const data = {
    results: [
        {
            _id: "63740fede2c75d8744f80a3f",
            first_name: "Mario",
            last_name: "Girón",
            username: "mariogironm",
            email: "mario@gmail.com",
            image: "",
            password: "12345"
        }
    ]
}

export const restHandlers = [
    http.get('https://peticiones.online/api/users', () => {
        return HttpResponse.json(data)
    }),
]

const server = setupServer(...restHandlers);

beforeAll(() => server.listen());

afterAll(() => server.close());

afterEach(() => {
    server.resetHandlers();
    cleanup()
});