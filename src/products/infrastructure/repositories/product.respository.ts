import {IHttp} from '@common/domain/repositories';
import {ProductEntity} from '@products/domain/models';
import {IProductRepository} from '@products/domain/repositories';
import {ProductAdapter} from '../adapters';
import {ErrorHandler} from '@src/core/utils';
import {ProductDto} from '../models';
import {fakeApiGetProducts} from './__test__/mocks';
import {API_URL} from '@env';

export class ProductRepositoryImpl implements IProductRepository {
  constructor(readonly http: IHttp) {}

  getProducts = async (): Promise<ProductEntity[]> => {
    try {
      // const response = await this.http.request<ProductDto[]>({
      //   method: 'get',
      //   headers: {
      //     authorId: 'randomID',
      //   },
      //   url: `${API_URL}/bp/products`,
      // });
      const response = await fakeApiGetProducts();
      return ProductAdapter.ProductsDtoToEntity(response);
    } catch (error) {
      throw ErrorHandler.fetch(error);
    }
  };
}
