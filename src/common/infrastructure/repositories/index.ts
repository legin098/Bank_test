import {MMKV} from 'react-native-mmkv';
import {IRepositoryInfrastructure} from './infrastructure.repository';
import {MobileStorageRepository} from './mobileStorage.repository';
import {Http} from './http.repository';

export const storageInstance = new MMKV();

export const repositoryInfrastructure = (): IRepositoryInfrastructure => {
  const mobileStorageRepositoryInstance = new MobileStorageRepository(
      storageInstance,
    ),
    http = new Http(mobileStorageRepositoryInstance);

  return {
    http,
    mobileStorage: mobileStorageRepositoryInstance,
  };
};
