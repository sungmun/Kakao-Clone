import Init from 'hooks/reduxInit';
import { arrayOf, func, node, oneOfType, shape, string } from 'prop-types';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

const Index = ({ children, location, history }) => {
  const { profile, talkRoomList, friendList } = useSelector(state => state);

  const isError = (...objs) =>
    objs.find(({ error }) => error !== null) !== undefined;

  Init(location);

  useEffect(() => {
    if (isError(profile, talkRoomList, friendList)) {
      history.push('/login');
    }
  }, [profile, talkRoomList, friendList]);

  return <div>{children}</div>;
};

Index.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
  location: shape({ pathname: string }).isRequired,
  history: shape({ push: func }).isRequired,
};

export default withRouter(Index);
