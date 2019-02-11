/* eslint-disable no-undef */
import { expect } from 'chai';
import { auth, TestCaseUtile } from '../../utile';
import { addUser } from '../talkRoom.controller';

import { newToken } from '../../../../private-key.json';

const { convertMiddlewareToPromise, getData, setTokenMocks } = TestCaseUtile;

export default () => {
    describe('return success', () => {
        let data;

        before(() =>
            convertMiddlewareToPromise(
                auth,
                setTokenMocks('POST', { friend: 3 }, newToken)
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(addUser, promiseData)
                )
                .then(promiseData => {
                    data = getData(promiseData);
                })
        );

        it('should null cheack', () => expect(data).to.have.null);
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
            );

            it('should return message ', () =>
                expect(data).to.be.equal('not loggged in'));
        });
    });
};
