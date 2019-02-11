/* eslint-disable no-undef */
import { expect } from 'chai';
import { createMocks } from 'node-mocks-http';
import { auth, TestCaseUtile } from '../../utile';
import { read } from '../talkRoom.controller';
import { newToken } from '../../../../private-key.json';

const { convertMiddlewareToPromise, getData } = TestCaseUtile;

export default () => {
    describe('return success', () => {
        // let data;
        before(() =>
            convertMiddlewareToPromise(
                auth,
                createMocks({
                    method: 'GET',
                    params: 1,
                    headers: { 'x-access-token': newToken }
                })
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(read, promiseData)
                )
                .then(promiseData => {
                    data = getData(promiseData);
                })
        );
    });

    describe('return fail', () => {
        describe('token null', () => {
            before(() =>
                convertMiddlewareToPromise(
                    auth,
                    createMocks({
                        method: 'GET',
                        params: 1
                    })
                )
                    .then(promiseData =>
                        convertMiddlewareToPromise(read, promiseData)
                    )
                    .then(promiseData => {
                        data = getData(promiseData);
                    })
            );

            it('should return message ', () =>
                expect(data).to.be.equal('not loggged in'));
        });

        describe('params null', () => {
            let data;
            before(() =>
                convertMiddlewareToPromise(
                    auth,
                    createMocks({
                        method: 'GET',
                        headers: { 'x-access-token': newToken }
                    })
                )
                    .then(promiseData =>
                        convertMiddlewareToPromise(read, promiseData)
                    )
                    .then(promiseData => {
                        data = getData(promiseData);
                    })
            );

            it('should return message ', () =>
                expect(data).to.be.equal('params가 없습니다'));
        });
    });
};
