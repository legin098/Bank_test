import {DateTime} from 'luxon';
import {IDataInputList} from '@common/presenter/models';

export const MONTHS_NAMES: IDataInputList[] = [
    {
      label: 'Enero',
      value: '01',
    },
    {
      label: 'Febrero',
      value: '02',
    },
    {
      label: 'Marzo',
      value: '03',
    },
    {
      label: 'Abril',
      value: '04',
    },
    {
      label: 'Mayo',
      value: '05',
    },
    {
      label: 'Junio',
      value: '06',
    },
    {
      label: 'Julio',
      value: '07',
    },
    {
      label: 'Agosto',
      value: '08',
    },
    {
      label: 'Septiembre',
      value: '09',
    },
    {
      label: 'Octubre',
      value: '10',
    },
    {
      label: 'Noviembre',
      value: '11',
    },
    {
      label: 'Diciembre',
      value: '12',
    },
  ],
  CURRENT_DATE = DateTime.now(),
  CURRENT_DAY =
    CURRENT_DATE.day <= 9 ? `0${CURRENT_DATE.day}` : `${CURRENT_DATE.day}`,
  CURRENT_MONTH =
    CURRENT_DATE.month <= 9
      ? `0${CURRENT_DATE.month}`
      : `${CURRENT_DATE.month}`,
  CURRENT_YEAR = `${CURRENT_DATE.year}`,
  INITIAL_YEAR = CURRENT_DATE.year,
  INITIAL_MONTH = CURRENT_MONTH,
  INITIAL_DAY = CURRENT_DAY,
  FINAL_YEAR = 2043,
  TOTAL_YEARS = FINAL_YEAR - Number(INITIAL_YEAR),
  YEARS_NAMES: IDataInputList[] = [...Array(TOTAL_YEARS + 1)].map((e, i) => ({
    label: `${INITIAL_YEAR + i}`,
    value: `${INITIAL_YEAR + i}`,
  }));
