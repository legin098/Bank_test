import {DateTime} from 'luxon';

export const formatDate = (date: string, format: string): string => {
  const dateIso = DateTime.fromISO(date, {zone: 'UTC'});
  const formatDate = dateIso.toFormat(format);

  return formatDate;
};

export const addOneYearToDate = (date: string): string => {
  if (!date) return '';

  const currentDate = DateTime.fromISO(date);
  const addYear = currentDate.plus({years: 1});
  const format = addYear.toFormat('yyyy-MM-dd');

  return format;
};

export const isFutureDate = (value: string): boolean => {
  if (!value) return true;

  const currentDate = DateTime.utc().startOf('day');
  const selectedDate = DateTime.fromISO(value, {zone: 'UTC'}).startOf('day');
  const isValid = selectedDate.isValid && selectedDate >= currentDate;

  return isValid;
};
