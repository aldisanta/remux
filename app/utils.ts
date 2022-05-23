export function parseDate(date: Date) {
  return new Intl.DateTimeFormat("id-ID").format(date);
}