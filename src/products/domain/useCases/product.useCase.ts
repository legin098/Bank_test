import {ProductEntity} from '../models';
import {IProductRepository} from '../repositories';

export class ProductUseCase {
  constructor(readonly repository: IProductRepository) {}

  getProducts = async (): Promise<ProductEntity[]> =>
    await this.repository.getProducts();
}
