/* eslint-disable no-undef */
import { expect } from 'chai';
import { createMocks } from 'node-mocks-http';
import { auth, TestCaseUtile } from '../../utile';
import { remove } from '../talkRoom.controller';

const { convertMiddlewareToPromise, getData } = TestCaseUtile;

export default () => {
    describe('return success', () => {
        before(() => {
            convertMiddlewareToPromise(
                auth,
                createMocks({
                    method: 'DELETE',
                    params: 1,
                    headers: { 'x-access-token': token }
                })
            ).then(promiseData =>
                convertMiddlewareToPromise(remove, promiseData)
            );
        });
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
                        headers: { 'x-access-token': token }
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
