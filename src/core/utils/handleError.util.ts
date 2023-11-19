import {AxiosError} from 'axios';
import {FetchError} from './fetchError.util';
import {REQUEST_ERRORS} from '../constants';

export class ErrorHandler {
  public static searchError = (errors: string[]): string[] => {
    const validErrorKeys = Object.keys(REQUEST_ERRORS);
    let validErrors: string[] = [];
    errors.forEach(errorKey => {
      const isInclude = validErrorKeys.includes(errorKey);
      //@ts-ignore
      validErrors.push(REQUEST_ERRORS[isInclude ? errorKey : 'unknown']);
    });
    return validErrors;
  };

  static fetch(error: unknown): void {
    const axiosError = error as AxiosError,
      //@ts-ignore
      errorRequest = axiosError.response?.data?.error,
      errors: string[] = this.searchError(errorRequest);
    throw new FetchError(JSON.stringify(errors));
  }

  static catch(error: unknown): string[] {
    const e = error as Error;
    return JSON.parse(e.message);
  }
}
