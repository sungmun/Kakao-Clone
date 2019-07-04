export const SET_MODE = 'SET_MODE';

export const BASE = 'HEADER/BASE';
export const NONE = 'HEADER/NONE';
export const SLIM = 'HEADER/SLIM';

export type Mode = 'HEADER/BASE' | 'HEADER/NONE' | 'HEADER/SLIM';

export const setMode = (mode: Mode) => ({
  mode,
  type: SET_MODE,
});
