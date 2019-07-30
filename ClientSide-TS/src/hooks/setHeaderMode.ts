import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { headActions, HeaderMode } from 'src/reducer/header';

export const setHeaderModeHook = (MODE_TYPE: HeaderMode) => {
  const dispatch = useDispatch();
  useEffect((): (() => void) => {
    switch (MODE_TYPE) {
      case HeaderMode.BASE:
        dispatch(headActions.setBaseMode());
        break;
      case HeaderMode.NONE:
        dispatch(headActions.setNoneMode());
        break;
      case HeaderMode.SLIM:
        dispatch(headActions.setSlimMode());
        break;
    }
    return () => {
      dispatch(headActions.setBaseMode());
    };
  }, []);
};
