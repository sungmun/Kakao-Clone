import { expect } from "chai";
import { auth, TestCaseUtile } from "../../utile";
import { addUser } from "../talkRoom.controller";

const { convertMiddlewareToPromise, getData, setTokenMocks } = TestCaseUtile;

export const addUserTestCase = token => {
    describe("return success", () => {
        let data;
        before(() => {
            convertMiddlewareToPromise(
                auth,
                setTokenMocks("POST", { friend: 3 }, token)
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(addUser, promiseData)
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
                    setTokenMocks("POST", { friend: 3 }, null)
                )
                    .then(promiseData =>
                        convertMiddlewareToPromise(addUser, promiseData)
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
