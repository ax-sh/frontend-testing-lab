// import {rest} from 'msw'
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import axios from "axios";
import { faker } from "@faker-js/faker";

const server = setupServer(
  http.get("/api", () =>
    HttpResponse.json(
      faker.helpers.multiple(faker.person.fullName, { count: 300 }),
    ),
  ),
);
faker.seed(42);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
test("handles server error", async () => {
  server.use(
    http.get("/api", () => {
      return HttpResponse.json(faker.helpers.multiple(faker.person.fullName));
    }),
  );

  const a = await axios.get("/api");
  console.log(await a.data);
});
