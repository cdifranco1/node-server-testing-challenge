const request = require("supertest")

const server = require('./server.js')
const db = require('./database/db-config')

describe("server", function() {
  describe("GET /", function() {
    it("should return 200 OK", function() {
      return request(server)
      .get("/api/users")
      .then(res => {
        expect(res.status).toBe(200)
      })
    })
  })
  describe("POST /", function() {
    beforeEach(async () => {
      await db("users").truncate()
    })
    it("should return added user", function() {
      return request(server)
      .post("/api/users")
      .send({ 
        username: "charlie",
        password: "hello"
      })
      .then(res => {
        expect(res.body.username).toBe("charlie")
        expect(res.body.password).toBe("hello")
      })
    })
  })
  
})