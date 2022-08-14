import { server } from "./index"
import supertest from "supertest"

const requestWithSupertest = supertest(server)

describe("render index", () => {
  it("GET /calculus", async () => {
    const res = await requestWithSupertest.get(
      "/calculus?query=[MiAqICgyMy8oMyozKSktIDIzICogKDIqMyk=]"
    )
    expect(res.status).toEqual(200)
    expect(res.type).toEqual(expect.stringContaining("json"))
    expect(res.body).toStrictEqual({
      error: false,
      result: -132.88888888888889,
    })
  })
})
