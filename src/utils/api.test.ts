// import {rest} from 'msw'
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import axios from "axios";

const server = setupServer(
  http.get("/api", () => HttpResponse.json(["Tom", "", "Spike"])),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
test("handles server error", async () => {
  server.use(
    http.get("/api", () => {
      return HttpResponse.json(["Tom", "Jerry", "Spike"]);
    }),
  );

  const a = await axios.get("/api");
  console.log(await a.data);
});
