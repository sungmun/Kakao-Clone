import { IUnLoadUser, IUser } from 'src/interface/user.interface';
import axios from './axios';

class ProfileService {
  private serviceUser: IUser;
  private serviceToken: string;

  public async login(user: IUnLoadUser = this.serviceUser) {
    const { data } = await axios(
      { method: 'POST', url: '/user' },
      { data: { user } },
    );
    this.serviceToken = data.token;
    return data.token;
  }

  public async getUser(token: string = this.serviceToken) {
    const { data } = await axios(
      { method: 'GET', url: '/user/auth' },
      { token },
    );
    return data.profile;
  }

  public async getFriend(token: string = this.serviceToken) {
    const { data } = await axios({ method: 'GET', url: '/friend' }, { token });
    return data.friend;
  }

  public async addFreind(token: string = this.serviceToken, id: number) {
    await axios(
      { method: 'POST', url: '/friend' },
      { token, data: { friend: id } },
    );
  }

  public async getUserList(token: string = this.serviceToken) {
    const { data } = await axios({ method: 'GET', url: '/user' }, { token });
    return data.userList;
  }
}

export const profileServiceInstance = new ProfileService();
