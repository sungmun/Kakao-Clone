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
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.body).have.property("success");
                    expect(res.body).have.property("message");

                    expect(res.body.success).to.be.equal(false);
                    done();
                });
        });
        it("should return the token", done => {
            chai.request(url)
                .post("/user")
                .send({ user })
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.body).have.property("success");
                    expect(res.body).have.property("message");

                    expect(res.body.success).to.be.equal(true);
                    expect(res.body.message).have.property("token");
                    done();
                });
        });
    });

    describe("User login check Test", () => {
        it("should return the not loggged in", done => {
            chai.request(url)
                .get("/user")
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.body).have.property("success");
                    expect(res.body).have.property("message");

                    expect(res.body.success).to.be.equal(false);
                    done();
                });
        });
        it("should return err", done => {
            chai.request(url)
                .get("/user")
                .set("x-access-token", "body")
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res.body).have.property("success");
                    expect(res.body).have.property("message");
                    expect(res.body.success).to.be.equal(false);
                    done();
                });
        });
        it("should return the profile", done => {
            chai.request(url)
                .post("/user")
                .send({ user })
                .end((err, res) => {
                    expect(err).to.be.null;

                    const body = res.body;
                    expect(body).have.property("success");
                    expect(body).have.property("message");

                    expect(body.success).to.be.equal(true);
                    expect(body.message).have.property("token");

                    chai.request(url)
                        .get("/user")
                        .set("x-access-token", body.message.token)

                        .end((err, res) => {
                            expect(err).to.be.null;

                            expect(res.status).to.equal(201);

                            const body = res.body;
                            expect(body).have.property("success");
                            expect(body).have.property("message");

                            const profile = expect(body.message.profile);
                            profile.have.property("socialId");
                            profile.have.property("platformName");
                            profile.have.property("nickName");
                            profile.have.property("photos");

                            done();
                        });
                });
        });
    });
});
