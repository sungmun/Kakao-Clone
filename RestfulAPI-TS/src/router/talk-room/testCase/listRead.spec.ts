import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { newToken } from '../../../../private-key.json';
import http from '../../../index';

chai.use(chaiHttp);
export const listReadTest = () => {
  describe('return success', () => {
    it('should return Array type talkRoomList', async () => {
      const result = await chai
        .request(http)
        .get('/talk-room')
        .set('x-access-token', newToken);

      expect(result.status).to.equal(201);
      expect(result.body).to.have.property('talkRoomList');
      result.body.talkRoomList.forEach((data: any) =>
        expect(data).to.have.all.keys(
          'id',
          'createdAt',
          'updatedAt',
          'UserList',
        ),
      );
    });
  });
};
