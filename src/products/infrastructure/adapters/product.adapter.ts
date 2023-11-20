import {ProductEntity} from '@src/products/domain/models';
import {ProductDto} from '../models';
import {convertDateUtcToLocal} from '@src/core/utils';

export class ProductAdapter {
  public static ProductsDtoToEntity = (data: ProductDto[]): ProductEntity[] =>
    data.map(product => ({
      id: product.id,
      name: product.name ?? '',
      picture: product.logo ?? '',
      description: product.description ?? '',
      dateRelease: convertDateUtcToLocal(product.date_release),
      dateRevision: convertDateUtcToLocal(product.date_revision),
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
