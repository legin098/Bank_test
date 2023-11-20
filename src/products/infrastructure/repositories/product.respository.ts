import {IHttp} from '@common/domain/repositories';
import {ProductEntity} from '@products/domain/models';
import {IProductRepository} from '@products/domain/repositories';
import {ProductAdapter} from '../adapters';
import {ErrorHandler} from '@src/core/utils';
import {ProductDto} from '../models';
import {API_URL} from '@env';

export class ProductRepositoryImpl implements IProductRepository {
  constructor(readonly http: IHttp) {}

  getProducts = async (): Promise<ProductEntity[]> => {
    try {
      const response = await this.http.request<ProductDto[]>({
        method: 'get',
        headers: {
          authorId: '10',
        },
        url: `${API_URL}/bp/products`,
      });
      return ProductAdapter.ProductsDtoToEntity(response);
    } catch (error) {
      throw ErrorHandler.fetch(error);
    }
  };

  addProduct = async (product: ProductEntity): Promise<void> => {
    try {
      const body = ProductAdapter.ProductEntityToDto(product);

      await this.http.request<ProductDto>({
        method: 'post',
        headers: {
          authorId: '10',
        },
        body,
        url: `${API_URL}/bp/products`,
      });
    } catch (error) {
      throw ErrorHandler.fetch(error);
    }
  };

  verificationProduct = async (productID: string): Promise<boolean> => {
    try {
      const response = await this.http.request<boolean>({
        method: 'get',
        headers: {
          authorId: '10',
        },
        params: {
          id: productID,
        },
        url: `${API_URL}/bp/products/verification`,
      });
      return response;
    } catch (error) {
      throw ErrorHandler.fetch(error);
    }
  };

  deleteProduct = async (productID: string): Promise<void> => {
    try {
      await this.http.request<void>({
        method: 'delete',
        headers: {
          authorId: '10',
        },
        params: {
          id: productID,
        },
        url: `${API_URL}/bp/products`,
      });
    } catch (error) {
      throw ErrorHandler.fetch(error);
    }
  };

  updateProduct = async (product: ProductEntity): Promise<void> => {
    try {
      const body = ProductAdapter.ProductEntityToDto(product);

      await this.http.request<ProductDto>({
        method: 'put',
        headers: {
          authorId: '10',
        },
        body,
        url: `${API_URL}/bp/products`,
      });
    } catch (error) {
      throw ErrorHandler.fetch(error);
    }
  };
}
