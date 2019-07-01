import { useEffect, useState } from 'react';

const LogoutHook = () => {
  const [init, setInit] = useState(true);

  useEffect(() => {
    if (init) alert(`로그아웃 되셨습니다.`);
    setInit(false);
  }, [init]);
};

export default LogoutHook;
