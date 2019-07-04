export interface IState<T> {
  error?: Error;
  status: boolean;
  data: T;
}
