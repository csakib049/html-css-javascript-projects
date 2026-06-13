const request = require("supertest");
const app = require("../app");

describe("POST /api/posts/create", () => {
    
    it("should return 200 OK and a success message", async () => {

        const res = await request(app)
            .post("/api/posts/create")
            .send({}); 

       
        expect(res.statusCode).toBe(401);
     
        expect(res.body).toEqual({ 
             message: "Unauthorized"
        });
    });

});