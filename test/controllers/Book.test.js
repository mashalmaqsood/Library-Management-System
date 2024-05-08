const request = require("supertest");
const models = require("../../src/db/models");
const app = require("../../index");

afterAll(async () => {
  await models.sequelize.close();
});

describe("Get all books", () => {
  it("Should return array of books.", async () => {
    let res = await request(app).get("/api/books/getAllBooks");
    //   console.log(res)
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(0);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});

describe("Get Book by id", () => {
  test("Should return the object of book of the given id.", async () => {
    let res = await request(app).get("/api/books/getBookById/2");
    expect(res.status).toBe(200);
    expect(typeof res.body).toBe("object");
    expect(res.body.id).toBe(2);
    expect(Object.keys(res.body).length).toBe(9);
  });
  it("Should return error if the given id is not string.", async () => {
    let res = await request(app).get("/api/books/getBookById/3sfv");
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
  });
  it("Should return error if id doesn't exist.", async () => {
    let res = await request(app).get("/api/books/getBookById/900");
    expect(res.status).toBe(404);
    expect(res.error).toEqual(expect.any(Error));
  });
});

describe("Create a book record", () =>{
it("should return a success message when a record is created", async ()=>{
    let res = await request(app).post('/api/books/createBook').send({
            title: "Clean Code",
            author: "Robert C. Martin",
            ISBN: "978-0132350884",
            genre: "Software Engineering",
            publishedYear: 2008,
            publisher: "Prentice Hall"
    });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Book created successfully.")
})
it("should return an error if required field is missing", async()=>{
    let res = await request(app).post('/api/books/createBook').send({
        title: "hello",
        author: "Robert C. Martin",
        ISBN: "978-0132350884",
        genre: "Software Engineering",
        // publishedYear: 2008,
        publisher: "Prentice Hall"
    })
    expect(res.status).toBe(400);
    expect(res.error).toEqual(expect.any(Error));
    expect(res.body.message).toBe("Invalid Input Data");
})
})