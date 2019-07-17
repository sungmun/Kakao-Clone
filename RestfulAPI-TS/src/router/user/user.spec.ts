import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { newToken, oldToken } from '../../../private-key.json';
import { User } from '../../database/models/User.model';
import http from '../../index';
import { testProfile } from '../utile';

chai.use(chaiHttp);

describe('UserService', () => {
  describe('User login Test', () => {
    it('Post not user error message', async () => {
      const result = await chai.request(http).post('/user');

      expect(result.status).to.equal(403);
      expect(result.body).to.equal('유저 정보가 없습니다');
    });

    it('Post user return the token', async () => {
      const result = await chai
        .request(http)
        .post('/user')
        .send({ user: testProfile });

      expect(result.status).to.equal(201);
      expect(result.body.token).to.be.a('String');
    });
  });

  describe('User login cheack Test', () => {
    describe('should return error', () => {
      it('should old token Factor error message', async () => {
        const result = await chai
          .request(http)
          .get('/user/auth')
          .set('x-access-token', oldToken);

        expect(result.status).to.equal(500);
        expect(result.body).to.equal('jwt expired');
      });

      it('should null token Factor error message', async () => {
        const result = await chai.request(http).get('/user/auth');

        expect(result.status).to.equal(401);
        expect(result.body).to.equal('not logged in');
      });
    });

    describe('should new token Factor', () => {
      it('should the profile', async () => {
        const result = await chai
          .request(http)
          .get('/user/auth')
          .set('x-access-token', newToken);

        expect(result.status).to.equal(201);
        expect(result.body.profile).to.have.all.keys(
          'id',
          'createdAt',
          'updatedAt',
          'socialId',
          'platformName',
          'nickName',
          'photos',
        );
      });
    });
  });

  describe('User List Test', () => {
    it('should return Array type profile', async () => {
      const result = await chai
        .request(http)
        .get('/user')
        .set('x-access-token', newToken);

      expect(result.status).to.equal(202);
      expect(result.body.userList).to.be.an('Array');

      result.body.userList.forEach((profile: User) =>
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
});
