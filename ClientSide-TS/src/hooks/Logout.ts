import { useEffect, useState } from 'react';

export const logoutHook = () => {
  const [init, setInit] = useState(true);

  useEffect(() => {
    if (init) alert(`로그아웃 되셨습니다.`);
    setInit(false);
  }, [init]);
};
