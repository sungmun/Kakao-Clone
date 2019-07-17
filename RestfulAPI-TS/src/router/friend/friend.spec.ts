/* global describe before it:true */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { newToken } from '../../../private-key.json';
import { User } from '../../database/models/User.model';
import http from '../../index';
chai.use(chaiHttp);

describe('friend.Controller', () => {
  describe('save', () => {
    it('should return true', async () => {
      const result = await chai
        .request(http)
        .post('/friend')
        .send({ friend: 2 })
        .set('x-access-token', newToken);

      expect(result.status).to.equal(204);
    });
  });

  describe('read', () => {
    it('should return Array type profile', async () => {
      const result = await chai
        .request(http)
        .get('/friend')
        .set('x-access-token', newToken);

      expect(result.body.friend).to.be.an('array');
      result.body.friend.forEach((profile: User) =>
        expect(profile).to.have.all.keys(
          'id',
          'createdAt',
          'updatedAt',
          'socialId',
          'platformName',
          'nickName',
          'photos',
        ),
      );
    });
  });

  describe('remove', () => {
    it('should return true', async () => {
      const result = await chai
        .request(http)
        .delete('/friend')
        .set('x-access-token', newToken);

      expect(result.status).to.equal(204);
    });
  });
});
