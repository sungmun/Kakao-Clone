/* global describe before it:true */
import { expect } from 'chai';
import { stub } from 'sinon';
import { TestCaseUtile } from '../../utile';
import { addUser } from '../talkRoom.controller';
import models from '../../../database/models';

const { getData, mockAfterAuth } = TestCaseUtile;

const addUserBefor = (body, done) => {
    const { req, res } = mockAfterAuth('POST', { body });

    res.on('send', () => {
        done(res);
    });

    addUser(req, res);
};

export default () => {
    before(() => {
        models.TalkRoom.build({ id: 1 })
            .reload()
            .then(data => {
                stub(data, 'addUserList').callsFake(user =>
                    models.User.build(user).reload()
                );
            });
    });

    describe('return success', () => {
        let code;
        before(done =>
            addUserBefor({ friend: { id: 3 }, talkroom: { id: 1 } }, res => {
                code = res.statusCode;
                done();
            })
        );

        it('should return statusCode 201', () =>
            expect(code).to.be.equals(201));
    });

    describe('argument null', () => {
        describe('talkroom argument null', () => {
            let data;
            before(done =>
                addUserBefor({ friend: 3 }, res => {
                    data = getData({ res });
                    done();
                })
            );

            it('should return message ', () =>
                expect(data).to.be.equal('talkRoom 값이 없습니다.'));
        });
        });
    });
};
