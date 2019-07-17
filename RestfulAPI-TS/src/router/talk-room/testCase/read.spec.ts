import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import * as request from 'supertest';
import { newToken } from '../../../../private-key.json';
import http from '../../../index';

chai.use(chaiHttp);

export const readTest = () => {
  describe('return success', () => {
    let result: request.Response;
    before(async () => {
      result = await chai
        .request(http)
        .get('/talk-room/1')
        .set('x-access-token', newToken);
    });

    it('talkRoom and userList and talkList data cheack', () => {
      expect(result.body).to.be.have.keys('TalkRoom', 'UserList', 'TalkList');
    });

    it('userList data cheack', () => {
      result.body.UserList.map((user: any) =>
        expect(user).to.be.have.keys(
          'nickName',
          'photos',
          'platformName',
          'socialId',
          'id',
          'createdAt',
          'updatedAt',
        ),
      );
    });

    it('talkList data cheack', () => {
      result.body.TalkList.map((talk: any) =>
        expect(talk).to.be.have.keys(
          'id',
          'createdAt',
          'updatedAt',
          'message',
          'talkRoomId',
          'userId',
        ),
      );
    });

    it('talkRoom data cheack', () => {
      expect(result.body.TalkRoom).to.be.have.keys(
        'id',
        'createdAt',
        'updatedAt',
      );
    });
  });
};
