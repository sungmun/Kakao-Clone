/* global describe before it:true */
import { expect } from 'chai';
import { stub } from 'sinon';
import { save, read, remove } from './friend.controller';
import { TestCaseUtile } from '../utile';
import models from '../../database/models';

const { getData, mockAfterAuth } = TestCaseUtile;

describe('friend.Controller', () => {
    before(() => {
        stub(models.Friend, 'destroy').resolves({ row: 1 });
    });

    describe('save', () => {
        let code;
        before(done => {
            const { req, res } = mockAfterAuth('POST', { body: { friend: 2 } });

            res.on('send', () => {
                code = res.statusCode;
                done();
            });

            save(req, res);
        });

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
        before(() => {
            stub(Model.Friend, 'destroy').resolves({ get: { row: 1 } });

            return convertMiddlewareToPromise(
                auth,
                setTokenMocks('delete', { friend: 2 }, newToken)
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(remove, promiseData)
                )
                .then(promiseData => {
                    code = promiseData.res.statusCode;
                });
        });

        after(() => restore());

        it('should return statusCode 204', () =>
            expect(code).to.be.equals(204));
    });
});
