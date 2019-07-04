import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IUser } from 'src/interface/user.interface';
import { IState } from 'src/reducer';

export const userFilter = (userlist?: IUser[]) => {
  const [userFilterList, setUserFilterList] = useState<IUser[]>([]);

  const { friendList, profile } = useSelector((state: IState) => state);

  const filter = (): IUser[] => {
    try {
      const friend = friendList.data;
      if (!userlist) return [];
      return userlist.filter(({ id }) => {
        if (profile.data === undefined) {
          throw Error('로그인이 이루어지지 않았습니다');
        }
        return profile.data.id === id
          ? false
          : !friend.find(data => data.id === id);
      });
    } catch (error) {
      console.log(error.message);
      return [];
    }
  };

  useEffect(() => {
    (async () => setUserFilterList(await filter()))();
  }, [userlist, friendList]);

  return userFilterList;
};
