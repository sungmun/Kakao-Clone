import {
  createActionCreators,
  createReducerFunction,
  ImmerReducer,
} from 'immer-reducer';

export enum HeaderMode {
  BASE,
  NONE,
  SLIM,
}

const initHeadState = {
  mode: HeaderMode.NONE,
};

export type HeaderState = typeof initHeadState;

class HeadReducer extends ImmerReducer<HeaderState> {
  public setBaseMode() {
    this.draftState.mode = HeaderMode.BASE;
  }
  public setNoneMode() {
    this.draftState.mode = HeaderMode.NONE;
  }
  public setSlimMode() {
    this.draftState.mode = HeaderMode.SLIM;
  }
}

export const headActions = createActionCreators(HeadReducer);
export default createReducerFunction(HeadReducer, initHeadState);
