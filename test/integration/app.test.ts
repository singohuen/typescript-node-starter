import supertest from "supertest";
import app from "../../src/app";

const request = supertest(app);

test("Root path", async (done) => {
  const res = await request.get("/");
  expect(res.status).toBe(200);
  expect(res.body.text).toBe("Hello world!");
  done();
});
