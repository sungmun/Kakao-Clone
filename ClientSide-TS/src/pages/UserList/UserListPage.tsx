import { UserListContainer } from 'containers/UserList/UserListContainer';
import { setHeaderModeHook } from 'hooks/setHeaderMode';
import { userFilter } from 'hooks/UserListFilter';
import { userlistHook } from 'hooks/UserListLoad';
import * as React from 'react';
import { HeaderMode } from 'src/reducer/header';
import './app.css';

const userlistPage: React.SFC = () => {
  const filterList = userFilter(userlistHook());

  setHeaderModeHook(HeaderMode.SLIM);

  return (
    <ul className="UserListPage">
      <UserListContainer allUser={filterList} />
    </ul>
  );
};

export { userlistPage as UserlistPage };

