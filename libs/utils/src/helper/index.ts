type DateTimeFormatOptions = {
  weekday: 'long' | 'short' | 'narrow';
  year: 'numeric' | '2-digit';
  month: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit' | undefined;
  day: 'numeric' | '2-digit' | undefined;
  time: 'numeric';
  hour: 'numeric';
  minute: 'numeric';
};

const options: DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  time: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

export const formatDate = (date: number | Date | undefined) =>
  new Intl.DateTimeFormat('id-ID', options).format(date);
