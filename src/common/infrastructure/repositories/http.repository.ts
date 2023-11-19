import Axios, {AxiosInstance} from 'axios';
import {
  IHttp,
  IRequestOption,
  IMobileStorageRepository,
} from '@common/domain/repositories';

export class Http implements IHttp {
  axios: AxiosInstance;

  constructor(readonly mobileStorage: IMobileStorageRepository) {
    const instanceAxios = Axios.create();
    this.axios = instanceAxios;
  }

  request = async <T>(requestOption: IRequestOption): Promise<T> => {
    const response = await this.axios.request({
      method: requestOption.method,
      url: requestOption.url,
      params: requestOption.params,
      data: requestOption.body,
      headers: {
        ...requestOption.headers,
      },
    });
    return response.data;
  };
}
