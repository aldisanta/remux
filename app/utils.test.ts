import { parseDate } from "./utils";

test("parseDate", () => {
  const dateTime = new Date();
  let expected: string = new Intl.DateTimeFormat("id-ID").format(dateTime);
  expect(parseDate(dateTime)).toEqual(expected);
});