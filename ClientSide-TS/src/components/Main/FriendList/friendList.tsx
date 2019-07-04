import { Profile } from 'components/Main/Profile';
import * as React from 'react';
import { IUser } from 'src/interface/user.interface';

interface IProps {
  Friends: IUser[];
}

const friendList: React.SFC<IProps> = ({ Friends }) => {
  return (
    <React.Fragment>
      <span className="Profile">{`친구 ${Friends.length}`}</span>
      {Friends.map((user, index) => (
        <Profile user={user} key={user.id} Index={index} />
      ))}
    </React.Fragment>
  );
};

export { friendList as FriendList };
