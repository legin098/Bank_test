import {IRepositoryInfrastructureProduct} from '../repositories';
import {ProductUseCase} from './product.useCase';

export const useCasesProduct = (
  repositories: IRepositoryInfrastructureProduct,
) => ({
  productUseCase: new ProductUseCase(repositories.product),
});
