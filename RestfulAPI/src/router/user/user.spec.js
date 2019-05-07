/* global describe before it:true */
import { expect } from 'chai';
import { newToken, oldToken } from '../../../private-key.json';
import { auth, TestCaseUtile } from '../utile';
import { login, cheack, userList } from './user.controller';

const { getData, setMocks, mockAfterAuth } = TestCaseUtile;

describe('User.Controller', () => {
    describe('User login Test', () => {
        describe('should return error', () => {
            let data;
            before(done => {
                const { req, res } = setMocks('POST');

                res.on('send', () => {
                    data = getData({ res });
                    done();
                });

                login(req, res);
            });

            it('should the error message', () =>
                expect(data).have.to.equals('유저 정보가 없습니다'));
        });

        describe('should return the token', () => {
            let data;

            before(done => {
                const { req, res } = setMocks('POST', {
                    body: {
                        user: {
                            platformName: 'google',
                            socialId: 'tjdans174@gmail.com'
                        }
                    }
                });

                res.on('send', () => {
                    data = getData({ res });
                    done();
                });

                login(req, res);
            });

            it('should the token', () => expect(data).have.property('token'));
        });
    });

    describe('User login cheack Test', () => {
        describe('should return error', () => {
            describe('should old token Factor', () => {
                let data;
                before(done => {
                    const { req, res } = setMocks('GET', {
                        headers: {
                            'x-access-token': oldToken
                        }
                    });

                    res.on('send', () => {
                        data = getData({ res });
                        done();
                    });

                    auth(req, res);
                });

                it('should the error message', () =>
                    expect(data).have.to.equals('jwt expired'));
            });

            describe('should null token Factor', () => {
                let data;
                before(done => {
                    const { req, res } = setMocks('GET');

                    res.on('send', () => {
                        data = getData({ res });
                        done();
                    });

                    auth(req, res);
                });

                it('should return message ', () =>
                    expect(data).to.be.equal('not loggged in'));
            });
        });
        describe('should new token Factor', () => {
            let data;
            before(done => {
                const { req, res } = setMocks('GET', {
                    headers: {
                        'x-access-token': newToken
                    }
                });

                auth(req, res, () => {
                    data = req.body;
                    done();
                });
            });

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

        describe('should return the profile', () => {
            let data;
            before(done => {
                const { req, res } = mockAfterAuth('GET');

                res.on('send', () => {
                    data = getData({ res });
                    done();
                });

                cheack(req, res);
            });

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

    describe('User List Test', () => {
        let data;
        before(done => {
            const { req, res } = mockAfterAuth('GET');
            res.on('send', () => {
                data = getData({ res });
                done();
            });

            userList(req, res);
        });

        it('should return Array', () =>
            expect(data.userList).to.be.an('array'));

        it('should return Array type profile', () =>
            data.userList.forEach(profile =>
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
});
