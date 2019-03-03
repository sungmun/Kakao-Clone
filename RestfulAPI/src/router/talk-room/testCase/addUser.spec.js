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
        stub(Model.TalkRoom, 'build').callsFake(() => ({
            reload: () => Promise.resolve({ addUserList: user => user })
        }));
    });

    after(() => restore());

    describe('return success', () => {
        let data;

        before(() =>
            convertMiddlewareToPromise(
                auth,
                setTokenMocks('POST', { friend: 3, talkroom: 1 }, newToken)
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(addUser, promiseData)
                )
                .then(promiseData => {
                    data = getData(promiseData);
                })
        );

        it('should null cheack', () => expect(data).to.be.ok);
    });

    describe('argument null', () => {
        let data;
        describe('token null', () => {
            before(() =>
                convertMiddlewareToPromise(
                    auth,
                    setTokenMocks('POST', { friend: 3 }, null)
                )
                    .then(promiseData =>
                        convertMiddlewareToPromise(addUser, promiseData)
                    )
                    .then(promiseData => {
                        data = getData(promiseData);
                    })
                    .catch(err => {
                        data = err.message;
                    })
            );

            it('should return message ', () =>
                expect(data).to.be.equal('not loggged in'));
        });
    });
};
