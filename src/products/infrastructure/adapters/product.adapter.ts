import {ProductEntity} from '@src/products/domain/models';
import {ProductDto} from '../models';

export class ProductAdapter {
  public static ProductsDtoToEntity = (data: ProductDto[]): ProductEntity[] =>
    data.map(product => ({
      id: product.id,
      name: product.name ?? '',
      picture: product.logo ?? '',
      description: product.description ?? '',
      dateRelease: product.date_release,
      dateRevision: product.date_revision,
    }));
  public static ProductEntityToDto = (data: ProductEntity): ProductDto => ({
    id: data.id,
    name: data.name,
    description: data.description,
    logo: data.picture,
    date_release: data.dateRelease,
    date_revision: data.dateRevision,
  });
}
