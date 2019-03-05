/* global describe before it:true */
import { expect } from 'chai';
import { TestCaseUtile } from '../../utile';
import { read } from '../talkRoom.controller';

const { getData, mockAfterAuth } = TestCaseUtile;

const readFun = (params, done) => {
    const { req, res } = mockAfterAuth('GET', { params });

    res.on('send', () => {
        done(res);
    });

    read(req, res);
};

export default () => {
    describe('return success', () => {
        let data;
        before(() =>
            convertMiddlewareToPromise(
                auth,
                createMocks({
                    method: 'GET',
                    params: { talkRoom: 1 },
                    headers: { 'x-access-token': newToken }
                })
            )
                .then(promiseData =>
                    convertMiddlewareToPromise(read, promiseData)
                )
                .then(promiseData => {
                    data = getData(promiseData);
                })
        );

        it('talkRoom and userList and talkList data cheack', () =>
            expect(data).to.be.have.keys('TalkRoom', 'UserList', 'TalkList'));

        it('userList data cheack', () =>
            data.UserList.map(list =>
                expect(list).to.be.have.keys(
                    'UserTalkRooms',
                    'nickName',
                    'photos',
                    'platformName',
                    'socialId',
                    'id',
                    'createdAt',
                    'updatedAt'
                )
            ));

        it('talkList data cheack', () =>
            data.TalkList.map(list =>
                expect(list).to.be.have.keys(
                    'id',
                    'createdAt',
                    'updatedAt',
                    'message',
                    'talkRoomId',
                    'userId'
                )
            ));

        it('talkRoom data cheack', () =>
            expect(data.TalkRoom).to.be.have.keys(
                'id',
                'createdAt',
                'updatedAt'
            ));
    });

    describe('return fail', () => {
        describe('token null', () => {
            let data;
            before(() =>
                convertMiddlewareToPromise(
                    auth,
                    createMocks({
                        method: 'GET',
                        params: 1
                    })
                )
                    .then(promiseData =>
                        convertMiddlewareToPromise(read, promiseData)
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

        describe('params null', () => {
            let data;
            before(() =>
                convertMiddlewareToPromise(
                    auth,
                    createMocks({
                        method: 'GET',
                        headers: { 'x-access-token': newToken }
                    })
                )
                    .then(promiseData =>
                        convertMiddlewareToPromise(read, promiseData)
                    )
                    .then(promiseData => {
                        data = getData(promiseData);
                    })
            );

            it('should return message ', () =>
                expect(data).to.be.equal('params가 없습니다'));
        });
    });
};
