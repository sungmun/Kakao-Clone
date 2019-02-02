import { expect } from "chai";
import { auth, TestCaseUtile } from "../../utile";
import { save } from "../talkRoom.controller";

const { convertMiddlewareToPromise, getData, setTokenMocks } = TestCaseUtile;

export const saveTestCase = token => {
    describe("return success", () => {
        let data;
        before(() => {
            convertMiddlewareToPromise(
                auth,
                setTokenMocks("POST", { friends: [3, 1] }, token)
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
                    setTokenMocks("POST", { friends: [3, 1] }, null)
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

        describe("friend null", () => {
            before(() => {
                convertMiddlewareToPromise(
                    auth,
                    setTokenMocks("POST", null, token)
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
