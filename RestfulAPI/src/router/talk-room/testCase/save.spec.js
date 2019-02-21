/* global describe before it:true */
import { expect } from 'chai';
import { auth, TestCaseUtile } from '../../utile';
import { save } from '../talkRoom.controller';
import { newToken } from '../../../../private-key.json';

const { convertMiddlewareToPromise, getData, setTokenMocks } = TestCaseUtile;

export default () => {
    describe('return success', () => {
        let data;

        before(() => {
            convertMiddlewareToPromise(
                auth,
                setTokenMocks('POST', { friends: [2, 3] }, newToken)
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(save, promiseData)
                )
                .then(promiseData => {
                    data = getData(promiseData);
                })
                .catch(() => {
                    data = undefined;
                });
        });

        it('should null cheack', () => expect(data).to.have.undefined);
    });

    describe('argument null', () => {
        let data;
        describe('token null', () => {
            before(() =>
                convertMiddlewareToPromise(
                    auth,
                    setTokenMocks('POST', { friends: [3, 2] }, null)
                )
                    .then(promiseData =>
                        convertMiddlewareToPromise(save, promiseData)
                    )
                    .then(promiseData => {
                        data = getData(promiseData);
                    })
                    .catch(error => {
                        data = error.message;
                    })
            );

            it('should return message ', () =>
                expect(data).to.be.equal('not loggged in'));
        });

        describe('friend null', () => {
            before(() =>
                convertMiddlewareToPromise(
                    auth,
                    setTokenMocks('POST', null, newToken)
                )
                    .then(promiseData =>
                        convertMiddlewareToPromise(save, promiseData)
                    )
                    .then(promiseData => {
                        data = getData(promiseData);
                    })
            );

            it('should return message ', () =>
                expect(data).to.be.equal('friends 값이 없습니다'));
        });
    });
};
