import {ProductDto} from '@src/products/infrastructure/models';

const MOCK_DATA_PRODUCTS: ProductDto[] = [
  {
    id: 'tjr-crd',
    name: 'Tarjeta de credito',
    description: 'Tarjeta de consumo bajo la modalidad de credito',
    logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
    date_release: '2024-02-01T00:00:00.000+00:00',
    date_revision: '2024-02-01T00:00:00.000+00:00',
  },
  {
    id: 'mst-dbt',
    name: 'Mastercard Débito',
    description: 'Tarjeta de débito con tecnología Mastercard',
    logo: 'https://www.mastercard.us/content/dam/mccom/global/logos/logo-mastercard-mobile.svg',
    date_release: '2024-03-15T00:00:00.000+00:00',
    date_revision: '2024-03-15T00:00:00.000+00:00',
  },
  {
    id: 'amx-gld',
    name: 'American Express Oro',
    description: 'Tarjeta American Express con beneficios exclusivos',
    logo: 'https://www.americanexpress.com/content/dam/amex/global/brand-assets/logo-us.svg',
    date_release: '2024-04-20T00:00:00.000+00:00',
    date_revision: '2024-04-20T00:00:00.000+00:00',
  },
  {
    id: 'dsc-svr',
    name: 'Discover Silver Card',
    description: 'Tarjeta Discover con características plateadas',
    logo: 'https://www.discover.com/content/dam/discover/logo-discover.svg',
    date_release: '2024-05-10T00:00:00.000+00:00',
    date_revision: '2024-05-10T00:00:00.000+00:00',
  },
  {
    id: 'jcb-plt',
    name: 'JCB Platinum Card',
    description: 'Tarjeta JCB con estatus platinum',
    logo: 'https://www.global.jcb/brand/logo/jcb-card-logo-en.png',
    date_release: '2024-06-25T00:00:00.000+00:00',
    date_revision: '2024-06-25T00:00:00.000+00:00',
  },
];

export const fakeApiGetProducts = (): Promise<ProductDto[]> =>
  new Promise(resolve => {
    setTimeout(() => resolve(MOCK_DATA_PRODUCTS), 1000);
  });
