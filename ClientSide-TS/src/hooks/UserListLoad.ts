import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { profileServiceInstance } from 'service/profile';
import { IUser } from 'src/interface/user.interface';
import { IState } from 'src/reducer';

export const userlistHook = () => {
  const [allUser, setAllUser] = useState<IUser[]>();

  const { token, friendList, profile } = useSelector((state: IState) => state);

  useEffect(() => {
    (async () =>
      setAllUser(await profileServiceInstance.getUserList(token.data)))();
  }, [friendList.status, profile.status]);

  return allUser;
};
