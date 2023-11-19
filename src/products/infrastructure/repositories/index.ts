import {IRepositoryInfrastructure} from '@src/common/infrastructure/repositories/infrastructure.repository';
import {IRepositoryInfrastructureProduct} from '@src/products/domain/repositories';
import {ProductRepositoryImpl} from './product.respository';

export const repositoryInfrastructureProduct = (
  infrastructure: IRepositoryInfrastructure,
): IRepositoryInfrastructureProduct => ({
  product: new ProductRepositoryImpl(infrastructure.http),
});
