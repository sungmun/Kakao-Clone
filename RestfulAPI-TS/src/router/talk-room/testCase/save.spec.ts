/* global describe before it:true */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { stub } from 'sinon';
import { newToken } from '../../../../private-key.json';
import { TalkRoom } from '../../../database/models/TalkRoom.model';
import http from '../../../index';

chai.use(chaiHttp);

export const saveTest = () => {
  before(() => {
    stub(TalkRoom, 'create').resolves(TalkRoom.build({ id: 1 }));

    stub(new TalkRoom(), '$add').callsFake((str: string, instances: any) => {
      return instances;
    });
  });

  describe('return success', () => {
    it('should return statusCode 201', async () => {
      const result = await chai
        .request(http)
        .post('/talk-room')
        .set('x-access-token', newToken)
        .send({ friends: [{ id: 2 }, { id: 3 }] });

      expect(result.status).to.be.equal(201);
    });
  });

  describe('friend null', () => {
    it('should return message ', async () => {
      const result = await chai
        .request(http)
        .post('/talk-room')
        .set('x-access-token', newToken);

      expect(result.status).to.be.equal(403);
      expect(result.body).to.be.equal('파라미터 값이 올바르지 않습니다');
    });
  });
};
