import {ProductEntity} from '../models';

export interface IProductRepository {
  getProducts(): Promise<ProductEntity[]>;
}
