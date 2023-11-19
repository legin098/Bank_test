import {repositoryInfrastructure} from '@src/common/infrastructure/repositories';
import {useCasesProduct} from '@src/products/domain/useCases';
import {repositoryInfrastructureProduct} from '@src/products/infrastructure/repositories';

const repositoryInfrastructureInstance = repositoryInfrastructure();
const repositoryInfrastructureProductInstance = repositoryInfrastructureProduct(
  repositoryInfrastructureInstance,
);
const useCasesProductInstance = useCasesProduct(
  repositoryInfrastructureProductInstance,
);

export default useCasesProductInstance;
