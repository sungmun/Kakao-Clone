/* global describe before it:true */
import { expect } from 'chai';
import { stub } from 'sinon';
import { save, read, remove } from './friend.controller';
import { TestCaseUtile } from '../utile';
import models from '../../database/models';

const { getData, mockAfterAuth } = TestCaseUtile;

describe('friend.Controller', () => {
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
        before(done => {
            const { req, res } = mockAfterAuth('POST');

            res.on('send', () => {
                data = getData({ res });
                done();
            });

            read(req, res);
        });

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
        before(done => {
            stub(models.Friend, 'destroy').resolves({ row: 1 });

            const { req, res } = mockAfterAuth('DELETE', {
                body: { friend: 2 }
            });

            res.on('send', () => {
                code = res.statusCode;
                done();
            });

            remove(req, res);
        });

        it('should return statusCode 204', () =>
            expect(code).to.be.equals(204));
    });
});
