import type { DATE_FORMAT } from '@/enums/dateFormat';
import { format, parse } from 'date-fns';

export function useUtils() {
  const parseDate = (dateStr: string, dateFormat?: DATE_FORMAT): Date => {
    if (!dateStr) {
      return new Date();
    }
    if (dateFormat) {
      return parse(dateStr, dateFormat, new Date());
    }
    return new Date(dateStr);
  };

  const formatDate = (date: Date, dateFormat?: DATE_FORMAT): string => {
    if (!date) {
      return '';
    }
    if (dateFormat) {
      return format(date, dateFormat);
    }
    return date.toISOString();
  };

  return {
    parseDate,
    formatDate
  };
}
