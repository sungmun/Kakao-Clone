import { BASE, Mode, setMode } from 'actions/header';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const setHeaderModeHook = (MODE_TYPE: Mode) => {
  const dispatch = useDispatch();
  useEffect((): (() => void) => {
    dispatch(setMode(MODE_TYPE));
    return () => dispatch(setMode(BASE));
  }, []);
};
