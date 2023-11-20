import {DateTime} from 'luxon';
import {TIME_ZONE} from '../constants';

export const convertDateUtcToLocal = (date: string): string => {
  const verifyEmpty = !date;
  const CURRENT_DATE_ISO = DateTime.now().setZone(TIME_ZONE).toISO() || '';

  if (verifyEmpty) return CURRENT_DATE_ISO;

  const utcDate = DateTime.fromISO(date, {zone: 'utc'});
  const localDate = utcDate.setZone(TIME_ZONE);
  const isoDate = localDate.toISO() || CURRENT_DATE_ISO;

  return isoDate;
};

export const convertDateLocalToUtc = (
  date: string,
  format?: string,
): string => {
  const dateLocal = !!format
    ? DateTime.fromFormat(date, format, {zone: TIME_ZONE})
    : DateTime.fromISO(date, {zone: TIME_ZONE});

  const CURRENT_DATE_ISO = DateTime.now().setZone(TIME_ZONE).toISO() || '';
  const utcDate = dateLocal.toUTC();
  const isoDate = utcDate.toISO() || CURRENT_DATE_ISO;

  return isoDate;
};

export const formatDate = (date: string, format: string): string => {
  const dateIso = DateTime.fromISO(date);
  const formatDate = dateIso.toFormat(format);

  return formatDate;
};

export const addOneYearToDate = (date: string): string => {
  if (!date) return '';

  const currentDate = DateTime.fromISO(date);
  const addYear = currentDate.plus({years: 1});
  const format = addYear.toFormat("dd'/'LL'/'yyyy");

  return format;
};
