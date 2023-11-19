import {IHttp, IMobileStorageRepository} from '@src/common/domain/repositories';

export interface IRepositoryInfrastructure {
  http: IHttp;
  mobileStorage: IMobileStorageRepository;
}
