/* eslint-disable no-undef */
import { expect } from 'chai';
import { stub, restore } from 'sinon';
import { newToken } from '../../../../private-key.json';
import { auth, TestCaseUtile } from '../../utile';
import { addUser } from '../talkRoom.controller';
import Model from '../../../database/models';

const { convertMiddlewareToPromise, getData, setTokenMocks } = TestCaseUtile;

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
