import { Profile } from 'components/Main/Profile';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'src/reducer';

const profileContainer: React.SFC = () => {
  const { profile } = useSelector((state: IState) => state);

  if (profile.data === undefined) return <div>Loading...</div>;

  return (
    <React.Fragment>
      {' '}
      <span className="Profile">내 프로필</span>
      <Profile user={profile.data} Index={-1} />
    </React.Fragment>
  );
};

export { profileContainer as ProfileContainer };
