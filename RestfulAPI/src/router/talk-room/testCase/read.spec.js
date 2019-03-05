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
        before(done =>
            readFun({ talkRoom: 1 }, res => {
                data = getData({ res });
                done();
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

    describe('params null', () => {
        let data;

        before(done =>
            readFun(undefined, res => {
                data = getData({ res });
                done();
            })
        );

        it('should return message ', () =>
            expect(data).to.be.equal('params가 없습니다'));
    });
};
