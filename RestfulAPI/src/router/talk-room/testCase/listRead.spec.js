/* eslint-disable no-undef */
import { expect } from 'chai';
import { auth, TestCaseUtile } from '../../utile';
import { listRead } from '../talkRoom.controller';
import { newToken } from '../../../../private-key.json';

const { convertMiddlewareToPromise, getData, setTokenMocks } = TestCaseUtile;

export default () => {
    describe('return success', () => {
        let data;
        before(() =>
            convertMiddlewareToPromise(
                auth,
                setTokenMocks('GET', null, newToken)
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(listRead, promiseData)
                )
                .then(promiseData => {
                    data = getData(promiseData);
                })
        );
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

    describe('return fail', () => {
        let data;
        before(() => {
            convertMiddlewareToPromise(auth, setTokenMocks('GET', null, null))
                .then(promiseData =>
                    convertMiddlewareToPromise(listRead, promiseData)
                )
                .then(promiseData => {
                    data = getData(promiseData);
                });
        });

        it('should return message ', () =>
            expect(data).to.be.equal('not loggged in'));
    });
};
