import {IMobileStorageRepository} from '@common/domain/repositories';
import {MMKV} from 'react-native-mmkv';

export class MobileStorageRepository implements IMobileStorageRepository {
  constructor(readonly storageInstance: MMKV) {}

  getItem = <T>(key: string): T | null => {
    const value = this.storageInstance.getString(key);
    return !!value ? JSON.parse(JSON.parse(value)) : null;
  };
  setItem = <T>(key: string, value: T): void =>
    this.storageInstance.set(key, JSON.stringify(JSON.stringify(value)));
  removeItem = (key: string) => this.storageInstance.delete(key);
}
