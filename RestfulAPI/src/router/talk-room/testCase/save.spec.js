/* global describe before it:true */
import { expect } from 'chai';
import { stub } from 'sinon';
import { TestCaseUtile } from '../../utile';
import models from '../../../database/models';
import { save } from '../talkRoom.controller';

const { getData, mockAfterAuth } = TestCaseUtile;

const saveFun = (body, done) => {
    const { req, res } = mockAfterAuth('POST', { body });

    res.on('send', () => {
        done(res);
    });

    save(req, res);
};

export default () => {
    before(() => {
        stub(models.TalkRoom, 'create').resolves(
            models.TalkRoom.build({ id: 1 })
        );

        stub(models.TalkRoom.build({ id: 1 }), 'addUserList').callsFake(user =>
            Promise.resolve(user)
        );
    });

    describe('return success', () => {
        let code;
        before(done =>
            saveFun({ friends: [2, 3] }, res => {
                code = res.statusCode;
                done();
            })
        );

        it('should return statusCode 201', () =>
            expect(code).to.be.equals(201));
    });

    describe('friend null', () => {
        let data;
        before(done =>
            saveFun(undefined, res => {
                data = getData({ res });
                done();
            })
        );

        it('should return message ', () =>
            expect(data).to.be.equal('friends 값이 없습니다'));
    });
};
