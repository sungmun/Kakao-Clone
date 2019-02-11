/* eslint-disable no-undef */
import { expect } from 'chai';
import { newToken, oldToken } from '../../../private-key.json';
import { auth, TestCaseUtile } from '../utile';
import { login, cheack } from './user.controller';

const {
    convertMiddlewareToPromise,
    setTokenMocks,
    getData,
    setMocks
} = TestCaseUtile;

describe('User.Controller', () => {
    describe('User login Test', () => {
        describe('should return error', () => {
            let data;
            before(() =>
                convertMiddlewareToPromise(login, setMocks('POST', null)).then(
                    promiseData => {
                        data = getData(promiseData);
                    }
                )
            );

            it('should the error message', () =>
                expect(data).have.to.equals('유저 정보가 없습니다'));
        });

        describe('should return the token', () => {
            let data;
            before(() =>
                convertMiddlewareToPromise(
                    login,
                    setMocks('POST', {
                        user: {
                            platformName: 'google',
                            socialId: 'tjdans174@gmail.com'
                        }
                    })
                ).then(promiseData => {
                    data = getData(promiseData);
                })
            );

            it('should the token', () => expect(data).have.property('token'));
        });
    });

    describe('User login cheack Test', () => {
        describe('should return error', () => {
            describe('should old token Factor', () => {
                let data;
                before(() =>
                    convertMiddlewareToPromise(
                        auth,
                        setTokenMocks('GET', null, oldToken)
                    ).catch(({ message }) => {
                        data = message;
                    })
                );

                it('should the error message', () =>
                    expect(data).have.to.equals('잘못된 토큰입니다.'));
            });

            describe('should null token Factor', () => {
                let data;
                before(() =>
                    convertMiddlewareToPromise(
                        auth,
                        setTokenMocks('GET', null, null)
                    ).catch(({ message }) => {
                        data = message;
                    })
                );

                it('should return message ', () =>
                    expect(data).to.be.equal('not loggged in'));
            });
        });

        describe('should return the profile', () => {
            let data;

            before(() =>
                convertMiddlewareToPromise(
                    auth,
                    setTokenMocks('GET', null, newToken)
                )
                    .then(promiseData =>
                        convertMiddlewareToPromise(cheack, promiseData)
                    )
                    .then(promiseData => {
                        data = getData(promiseData);
                    })
            );

            it('should the profile', () =>
                expect(data.profile).to.have.all.keys(
                    'id',
                    'createdAt',
                    'updatedAt',
                    'socialId',
                    'platformName',
                    'nickName',
                    'photos'
                ));
        });
    });
});
