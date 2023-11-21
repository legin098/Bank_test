import {isFutureDate} from '@src/core/utils';
import * as yup from 'yup';

export const formProductSchemeValidation = yup.object().shape({
  id: yup
    .string()
    .required('Este campo es requerido!')
    .min(3, 'Minimo 3 caracteres!')
    .max(10, 'Maximo 10 caracteres!'),
  name: yup
    .string()
    .required('Este campo es requerido!')
    .min(5, 'Minimo 5 caracteres!')
    .max(100, 'Maximo 100 caracteres!'),
  description: yup
    .string()
    .required('Este campo es requerido!')
    .min(10, 'Minimo 10 caracteres!')
    .max(200, 'Maximo 200 caracteres!'),
  picture: yup.string().required('Este campo es requerido!'),
  dateRelease: yup
    .string()
    .required('Este campo es requerido!')
    .test(
      'is-future-date',
      'La fecha debe ser igual o mayor a la actual!',
      isFutureDate,
    ),
  dateRevision: yup.string().required('Este campo es requerido!'),
});
