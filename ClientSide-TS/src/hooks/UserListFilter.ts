import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IUser } from 'src/interface/user.interface';
import { IState } from 'src/reducer';

export const userFilter = (userlist?: IUser[]) => {
  const [userFilterList, setUserFilterList] = useState<IUser[]>([]);

  const { friendList, profile } = useSelector((state: IState) => state);

  const filter = (data: IUser[]): IUser[] => {
    const friend = friendList.data;
    if (!profile.status) {
      throw Error('로그인이 이루어지지 않았습니다');
    }
    data.splice(data.findIndex(val => val.id === profile.data.id), 1);
    friend.forEach(user =>
      data.splice(data.findIndex(val => val.id === user.id), 1),
    );
    return data;
  };

  useEffect(() => {
    if (userlist) {
      setUserFilterList(filter(userlist));
    }
  }, [userlist, friendList]);

  return userFilterList;
};
