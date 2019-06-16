import { MODE_BASE, setMode } from 'actions/header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useReduxServerHook = MODE_TYPE => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMode(MODE_TYPE));
    return () => dispatch(setMode(MODE_BASE));
  }, []);
};

export default useReduxServerHook;
