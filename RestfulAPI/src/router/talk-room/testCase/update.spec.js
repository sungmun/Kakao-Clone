/* eslint-disable no-undef */
import { expect } from 'chai';
import { createMocks } from 'node-mocks-http';
import { auth, TestCaseUtile } from '../../utile';
import { save } from '../talkRoom.controller';
import { newToken } from '../../../../private-key.json';

const { convertMiddlewareToPromise, getData } = TestCaseUtile;

export default () => {
    describe('return success', () => {
        let data;
        before(() => {
            convertMiddlewareToPromise(
                auth,
                createMocks({
                    method: 'PUT',
                    params: 3,
                    headers: { 'x-access-token': newToken }
                })
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(save, promiseData)
                )
                .then(promiseData => {
                    data = getData(promiseData);
                });
        });

        it('should null cheack', () => expect(data).to.have.null);
    });

    describe('argument null', () => {
        let data;
        describe('token null', () => {
            before(() => {
                convertMiddlewareToPromise(
                    auth,
                    createMocks({
                        method: 'PUT',
                        params: 3
                    })
                )
                    .then(promiseData =>
                        convertMiddlewareToPromise(save, promiseData)
                    )
                    .then(promiseData => {
                        data = getData(promiseData);
                    });
            });

            it('should return message ', () =>
                expect(data).to.be.equal('not loggged in'));
        });

        describe('token null', () => {
            before(() => {
                convertMiddlewareToPromise(
                    auth,
                    createMocks({
                        method: 'PUT',
                        headers: { 'x-access-token': newToken }
                    })
                )
                    .then(promiseData =>
                        convertMiddlewareToPromise(save, promiseData)
                    )
                    .then(promiseData => {
                        data = getData(promiseData);
                    });
            });

            it('should return message ', () =>
                expect(data).to.be.equal('params가 없습니다'));
        });
    });
};
