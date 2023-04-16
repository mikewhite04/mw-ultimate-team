const request = require("supertest")("http://localhost:3000/api");
const expect = require("chai").expect;

describe("GET /players", function () {
    it("returns all players", async function () {
        const response = await request.get("/players");
        const data = response.body.data;
        expect(response.status).to.eql(200);
        expect(data.length).to.eql(2);
        expect(data[0].firstName).to.eql("Randy");
    });
});
describe("POST /player", function () {
    it("add a player", async function () {
        const response = await request.post("/player").send({
            firstName: "Ceedee",
            lastName: "Lamb",
            overall: 99,
            id: 3
        });
        const data = response.body.data;
        expect(response.status).to.eql(200);
        const response2 = await request.get("/players");
        const data2 = response2.body.data;
        console.log("here")
        expect(data2.length).to.eql(3);
        expect(data2[2].firstName).to.eql("Ceedee");
    });
});
describe("POST /updateplayer", function () {
    it("update a player", async function () {
        const response = await request.post("/updateplayer").send({id: 2, lastName: "White"});
        const data = response.body.data;
        expect(response.status).to.eql(200);
        const response3 = await request.get("/players");
        const data3 = response3.body.data;
        expect(data3.length).to.eql(2);
        expect(data3[1].lastName).to.eql("White");
    });
});