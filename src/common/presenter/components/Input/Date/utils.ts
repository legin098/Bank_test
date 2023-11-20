import {DateTime} from 'luxon';
import {IDataInputList} from '@common/presenter/models';

export const getDaysInMonth = (year: string, month: string) => {
  const totalDays = DateTime.fromFormat(
      `${year}-${month}`,
      "yyyy'-'MM",
    ).daysInMonth,
    daysMonth: IDataInputList[] = [...Array(totalDays)].map((e, i) => {
      const day = i + 1;
      return {
        value: day <= 9 ? `0${day}` : `${day}`,
        label: `${day}`,
      };
    });
  return daysMonth;
};
