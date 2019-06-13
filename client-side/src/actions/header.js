export const MODE_BASE = 'BASE';
export const MODE_NONE = 'NONE';
export const MODE_SLIM = 'SLIM';

export const SET_MODE = 'SET_MODE';

export const setMode = mode => ({
  type: SET_MODE,
  mode,
});
