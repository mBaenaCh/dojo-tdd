const { TestScheduler } = require('jest');
const request = require('supertest');
const { response } = require('./app');
const app = require('./app');

describe("testing /solver path", () => {
    test("it should return status code 200", done => {
        request(app)
        .get("/setSecret/4139")
        .then(response => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
   
    test("it should return a valid json object", done => {
        request(app)
        .get("/setSecret/4139")
        .then(response => {
            expect(response.type).toBe("application/json");
            done();
        });
    });

    test("it should return a defined secret value", done => {
        request(app)
        .get("/setSecret/4139")
        .then(response=>{
            expect(response.body.secret).not.toBeUndefined();
            done();
        })
    });
});