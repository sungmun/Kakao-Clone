import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'src/reducer';

export const loginCheck = () => {
  const { token } = useSelector((state: IState) => state);

  useEffect(() => {
    if (token.error) alert(`로그인에 실패하셨습니다`);
  }, [token]);

  if (token.error) return false;
  return token.status;
};
