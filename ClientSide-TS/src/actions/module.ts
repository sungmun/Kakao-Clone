export const ERROR_MESSAGE = 'ERROR-MESSAGE';

export interface IErrorMessage {
  type: typeof ERROR_MESSAGE;
  error: Error;
}
