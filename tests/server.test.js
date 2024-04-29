const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return all products", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toStrictEqual({ message: "success" });
  });
});
