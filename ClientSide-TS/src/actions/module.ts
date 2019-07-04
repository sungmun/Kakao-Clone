export const ERROR_MESSAGE = 'ERROR-MESSAGE';

export const failure = (error: Error): IErrorMessage => ({
  error,
  type: ERROR_MESSAGE,
});
export interface IErrorMessage {
  type: typeof ERROR_MESSAGE;
  error: Error;
}
