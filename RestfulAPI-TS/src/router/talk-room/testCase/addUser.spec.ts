import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import http from '../../../index';
import { newToken } from '../../../../private-key.json';

chai.use(chaiHttp);

export const addUserTest = () => {
  describe('return success', () => {
    it('should return statusCode 201', async () => {
      const result = await chai
        .request(http)
        .post('/talk-room/user')
        .set('x-access-token', newToken)
        .send({ talkroom: 1, friend: 3 });

      expect(result.status).to.equal(201);
    });
  });

  describe('argument null', () => {
    it('talkroom argument null', async () => {
      const result = await chai
        .request(http)
        .post('/talk-room/user')
        .set('x-access-token', newToken)
        .send({ talkRoom: 1 });

      expect(result.status).to.equal(403);
      expect(result.body).to.equal('파라미터 값이 올바르지 않습니다');
    });

    it('friend argument null ', async () => {
      const result = await chai
        .request(http)
        .post('/talk-room/user')
        .set('x-access-token', newToken)
        .send({ friend: 3 });

      expect(result.status).to.equal(403);
      expect(result.body).to.equal('파라미터 값이 올바르지 않습니다');
    });

    it('all paramter argument null ', async () => {
      const result = await chai
        .request(http)
        .post('/talk-room/user')
        .set('x-access-token', newToken);

      expect(result.status).to.equal(403);
      expect(result.body).to.equal('파라미터 값이 올바르지 않습니다');
    });
  });
};
