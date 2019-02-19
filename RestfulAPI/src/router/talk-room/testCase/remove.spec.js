/* eslint-disable no-undef */
import { expect } from 'chai';
import { createMocks } from 'node-mocks-http';
import { auth, TestCaseUtile } from '../../utile';
import { remove } from '../talkRoom.controller';
import { newToken } from '../../../../private-key.json';

const { convertMiddlewareToPromise, getData } = TestCaseUtile;

export default () => {
    describe('return success', () => {
        let code;
        before(() =>
            convertMiddlewareToPromise(
                auth,
                createMocks({
                    method: 'DELETE',
                    params: { talkRoom: 73 },
                    headers: { 'x-access-token': newToken }
                })
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(remove, promiseData)
                )
                .then(promiseData => {
                    code = promiseData.res.statusCode;
                })
        );

        it('should return statusCode 204', () =>
            expect(code).to.be.equals(204));
    });

    describe('return fail', () => {
        describe('token null', () => {
            let data;
            before(() => {
                convertMiddlewareToPromise(
                    auth,
                    createMocks({
                        method: 'DELETE',
                        params: 1
                    })
                )
                    .then(promiseData =>
                        convertMiddlewareToPromise(remove, promiseData)
                    )
                    .then(promiseData => {
                        data = getData(promiseData);
                    })
                    .catch(error => {
                        data = error.message;
                    });
            });

            it('should return message ', () =>
                expect(data).to.be.equal('not loggged in'));
        });

        describe('params null', () => {
            before(() => {
                convertMiddlewareToPromise(
                    auth,
                    createMocks({
                        method: 'DELETE',
                        headers: { 'x-access-token': newToken }
                    })
                )
                    .then(promiseData =>
                        convertMiddlewareToPromise(remove, promiseData)
                    )
                    .then(promiseData => {
                        data = getData(promiseData);
                    });

                it('should return message', () =>
                    expect(data).to.be.equal('params가 없습니다'));
            });
        });
    });
};
