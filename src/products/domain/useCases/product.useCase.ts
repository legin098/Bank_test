import {ProductEntity} from '../models';
import {IProductRepository} from '../repositories';

export class ProductUseCase {
  constructor(readonly repository: IProductRepository) {}

  getProducts = async (): Promise<ProductEntity[]> =>
    await this.repository.getProducts();

  addProduct = async (data: ProductEntity): Promise<void> =>
    await this.repository.addProduct(data);

  verificationProduct = async (productID: string): Promise<boolean> =>
    await this.repository.verificationProduct(productID);
}
