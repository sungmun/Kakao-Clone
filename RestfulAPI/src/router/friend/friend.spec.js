import chai, { expect } from "chai";
import http from "chai-http";
import { expect } from "chai";
import httpMocks from "node-mocks-http";
import { check } from "../utile";
import controller from "./friend.controller";

chai.use(http);

const url = "http://localhost:5000";
const user = {
    platformName: "google",
    socialId: "tjdans174@gmail.com"
};

const ErrorProcess = err => console.log(err);

const resCheack = res => {
    expect(res.body).have.property("success");
    expect(res.body).have.property("message");
    return res.body;
};

const getToken = new Promise((resolve, reject) => {
    chai.request(url)
        .post("/user")
        .send({ user })
        .then(resCheack)
        .then(res => {
            expect(res.body.success).to.be.equal(true);
            expect(res.body.message).have.property("token");
            return res.body.message.token;
        })
        .then(resolve)
        .catch(reject);
});

describe("friend.Controller", () => {
    describe("save", () => {
        it("should return success", done => {
            getToken.then(token => {
                chai.request(url)
                    .post("/friend")
                    .set("x-access-token", token)
                    .send({ friend: 15 })
                    .then(resCheack)
                    .then(body => {
                        expect(body.success).to.be.equal(true);
                    })
                    .then(() => done())
                    .catch(ErrorProcess);
            });
        });
    });
    describe("read", () => {
        it("should return Array", done => {
            getToken.then(token => {
                chai.request(url)
                    .get("/friend")
                    .set("x-access-token", token)
                    .then(resCheack)
                    .then(body => {
                        expect(body.success).to.be.equal(true);
                        expect(body.message.friend).to.be.an("array");
                        expect(body.message.friend)
                            .to.be.an("array")
                            .that.does.include("profile");
                    })
                    .then(() => done())
                    .catch(ErrorProcess);
            });
        });
    });

    describe("delete", () => {
        let req, res, data;
        before(() => {
            req = httpMocks.createRequest({
                method: "delete",
                url: "/friend",
                body: 2,
                headers: { "x-access-token": token }
            });
            res = httpMocks.createResponse();
            check(req, res, controller.save(req, res));
            data = JSON.parse(res._getData());
        });

        it("message type cheack", done => {
            expect(data).to.have.all.keys("success", "message");
            done();
        });

        it("should return success", done => {
            expect(data.success).to.be.equal(true);
            done();
        });
    });
});
