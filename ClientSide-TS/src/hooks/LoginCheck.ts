import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IState } from 'src/reducer';

export const loginCheck = () => {
  const { token } = useSelector((state: IState) => state);

  useEffect(() => {
    if (!token.status) alert(`로그인에 실패하셨습니다`);
  }, [token.error]);

  if (!token.status) return false;

  return token.status;
};
