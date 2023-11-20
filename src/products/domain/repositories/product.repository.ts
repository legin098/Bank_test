import {ProductEntity} from '../models';

export interface IProductRepository {
  getProducts(): Promise<ProductEntity[]>;
  addProduct(product: ProductEntity): Promise<void>;
  verificationProduct(productID: string): Promise<boolean>;
  deleteProduct(productID: string): Promise<void>;
  updateProduct(product: ProductEntity): Promise<void>;
}
