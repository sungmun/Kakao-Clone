import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';

const Login = () => {
  const { token } = useSelector(state => state);

  useEffect(() => {
    if (token.error) alert(`로그인에 실패하셨습니다`);
  }, [token]);

  if (token.error) return false;
  return token.status;
};

export default Login;
