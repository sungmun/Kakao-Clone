/* global describe before it:true */
import { expect } from 'chai';
import { stub } from 'sinon';
import { TestCaseUtile } from '../../utile';
import { remove } from '../talkRoom.controller';
import models from '../../../database/models';

const { getData, mockAfterAuth } = TestCaseUtile;

const removeFun = (params, done) => {
    const { req, res } = mockAfterAuth('DELETE', { params });

    res.on('send', () => done(res));

    remove(req, res);
};

export default () => {
    before(() => {
        stub(models.userTalkRooms, 'destroy').resolves({ row: 1 });
    });

    describe('return success', () => {
        let code;
        before(done =>
            removeFun({ talkRoom: 1 }, res => {
                code = res.statusCode;
                done();
            })
        );

        it('should return statusCode 204', () =>
            expect(code).to.be.equals(204));
    });

    describe('return fail', () => {
        describe('params null', () => {
            let data;
            before(done =>
                removeFun(undefined, res => {
                    data = getData({ res });
                    done();
                })
            );

            it('should return message', () =>
                expect(data).to.be.equal('params가 없습니다'));
        });
    });
};
