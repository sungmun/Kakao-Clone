import { BASE, Mode, SET_MODE } from 'actions/header';

export interface IHeaderState {
  mode: Mode;
}

const initState: IHeaderState = {
  mode: BASE,
};

interface IAction {
  mode: Mode;
  type: typeof SET_MODE;
}

export default (state = initState, action: IAction): IHeaderState => {
  switch (action.type) {
    case SET_MODE:
      return { ...state, mode: action.mode };
    default:
      return state;
  }
};
