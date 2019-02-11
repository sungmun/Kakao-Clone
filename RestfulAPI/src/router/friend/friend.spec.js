/* eslint-disable no-undef */
import { expect } from 'chai';
import { auth, TestCaseUtile } from '../utile';
import { newToken } from '../../../private-key.json';
import { remove, save, read } from './friend.controller';

const { convertMiddlewareToPromise, setTokenMocks, getData } = TestCaseUtile;

describe('friend.Controller', () => {
    describe('save', () => {
        let code;
        before(() =>
            convertMiddlewareToPromise(
                auth,
                setTokenMocks('POST', { friend: 2 }, newToken)
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(save, promiseData)
                )
                .then(promiseData => {
                    code = promiseData.res.statusCode;
                })
        );

        it('should return statusCode 204', () =>
            expect(code).to.be.equals(204));
    });

    describe('read', () => {
        let data;
        before(() =>
            convertMiddlewareToPromise(
                auth,
                setTokenMocks('get', null, newToken)
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(read, promiseData)
                )
                .then(promiseData => {
                    data = getData(promiseData);
                })
        );

        it('should return Array', () => expect(data.friend).to.be.an('array'));

        it('should return Array type profile', () =>
            data.friend.forEach(profile =>
                expect(profile).to.have.all.keys(
                    'id',
                    'createdAt',
                    'updatedAt',
                    'socialId',
                    'platformName',
                    'nickName',
                    'photos'
                )
            ));
    });

    describe('remove', () => {
        let code;
        before(() =>
            convertMiddlewareToPromise(
                auth,
                setTokenMocks('delete', { friend: 2 }, newToken)
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
});
