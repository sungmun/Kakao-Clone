/* global describe before it:true */
import { expect } from 'chai';
import { TestCaseUtile } from '../../utile';
import { listRead } from '../talkRoom.controller';

const { getData, mockAfterAuth } = TestCaseUtile;

export default () => {
    describe('return success', () => {
        let data;
        before(done => {
            const { req, res } = mockAfterAuth('GET');

            res.on('send', () => {
                data = getData({ res });
                done();
            });

            listRead(req, res);
        });

        it('should return Array type talkRoomList', () =>
            data.talkRoomList.map(talkRoom =>
                expect(talkRoom).to.have.all.keys(
                    'id',
                    'createdAt',
                    'updatedAt',
                    'userList'
                )
            ));
    });
};
