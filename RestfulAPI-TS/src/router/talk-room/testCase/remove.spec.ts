import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { stub } from 'sinon';
import { newToken } from '../../../../private-key.json';
import { UserTalkRoom } from '../../../database/models';
import http from '../../../index';

chai.use(chaiHttp);

export const removeTest = () => {
  before(() => {
    stub(UserTalkRoom, 'destroy').resolves(1);
  });

  describe('return success', () => {
    it('should return statusCode 204', async () => {
      const result = await chai
        .request(http)
        .delete('/talk-room/1')
        .set('x-access-token', newToken);

      expect(result.status).to.be.equal(208);
    });
  });

  describe('return fail', () => {
    describe('params null', () => {
      it('should return statusCode 404', async () => {
        const result = await chai
          .request(http)
          .delete('/talk-room')
          .set('x-access-token', newToken);

        expect(result.status).to.be.equal(404);
      });
    });
  });
};
