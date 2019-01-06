import chai, { expect } from "chai";
import http from "chai-http";

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
    return res;
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
describe("User.Controller", () => {
    describe("User login Test", () => {
        it("should return error", done => {
            chai.request(url)
                .post("/user")
                .then(resCheack)
                .then(res => expect(res.body.success).to.be.equal(false))
                .then(() => done())
                .catch(ErrorProcess);
        });
        it("should return the token", done => {
            chai.request(url)
                .post("/user")
                .send({ user })
                .then(resCheack)
                .then(res => {
                    expect(res.body.success).to.be.equal(true);
                    expect(res.body.message).have.property("token");
                })
                .then(() => done())
                .catch(ErrorProcess);
        });
    });

    describe("User login check Test", () => {
        it("should return the not loggged in", done => {
            chai.request(url)
                .get("/user")
                .then(resCheack)
                .then(res => expect(res.body.success).to.be.equal(false))
                .then(() => done())
                .catch(ErrorProcess);
        });
        it("should return err", done => {
            chai.request(url)
                .get("/user")
                .set("x-access-token", null)
                .then(resCheack)
                .then(res => expect(res.body.success).to.be.equal(false))
                .then(() => done())
                .catch(ErrorProcess);
        });
        it("should return the profile", done => {
            getToken.then(token => {
                chai.request(url)
                    .get("/user")
                    .set("x-access-token", token)
                    .then(resCheack)
                    .then(res => {
                        expect(res.status).to.equal(201);

                        const profile = expect(res.body.message.profile);
                        profile.have.property("socialId");
                        profile.have.property("platformName");
                        profile.have.property("nickName");
                        profile.have.property("photos");
                    })
                    .then(() => done())
                    .catch(ErrorProcess);
            });
        });
    });
});
