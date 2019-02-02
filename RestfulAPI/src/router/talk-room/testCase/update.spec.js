import { expect } from "chai";
import { auth, TestCaseUtile } from "../../utile";
import { save } from "../talkRoom.controller";
import { createMocks } from "node-mocks-http";

const { convertMiddlewareToPromise, getData, setTokenMocks } = TestCaseUtile;

export const updateTestCase = token => {
    describe("return success", () => {
        let data;
        before(() => {
            convertMiddlewareToPromise(
                auth,
                createMocks({
                    method: "PUT",
                    params: 3,
                    headers: { "x-access-token": token }
                })
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(save, promiseData)
                )
                .then(promiseData => (data = getData(promiseData)));
        });

        it("message type cheack", () =>
            expect(data).to.have.all.keys("success", "message"));

        it("should return success", () =>
            expect(data.success).to.be.equal(true));

        it("should null cheack", () => expect(data.message).to.have.null);
    });

    describe("argument null", () => {
        let data;
        describe("token null", () => {
            before(() => {
                convertMiddlewareToPromise(
                    auth,
                    createMocks({
                        method: "PUT",
                        params: 3
                    })
                )
                    .then(promiseData =>
                        convertMiddlewareToPromise(save, promiseData)
                    )
                    .then(promiseData => (data = getData(promiseData)));
            });

            it("message type cheack", () =>
                expect(data).to.have.all.keys("success", "message"));

            it("should return fail", () =>
                expect(data.success).to.be.equal(false));

            it("should return message ", () =>
                expect(data.message).to.be.equal("not loggged in"));
        });

        describe("token null", () => {
            before(() => {
                convertMiddlewareToPromise(
                    auth,
                    createMocks({
                        method: "PUT",
                        headers: { "x-access-token": token }
                    })
                )
                    .then(promiseData =>
                        convertMiddlewareToPromise(save, promiseData)
                    )
                    .then(promiseData => (data = getData(promiseData)));
            });

            it("message type cheack", () =>
                expect(data).to.have.all.keys("success", "message"));

            it("should return fail", () =>
                expect(data.success).to.be.equal(false));

            it("should return message ", () =>
                expect(data.message).to.be.equal("not loggged in"));
        });
    });
};
