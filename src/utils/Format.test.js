import { formatPrice, formatDate, formatMillis } from "./Format";

describe("Format Price", () => {
  test("test currency", () => {
    expect(formatPrice(12, "EUR")).toEqual("€12.00");
    expect(formatPrice(12, "USD")).toEqual("$12.00");
    expect(formatPrice(12, "GBP")).toEqual("£12.00");
  });

  test("test values", () => {
    expect(formatPrice(0, "USD")).toEqual("$0.00");
    expect(formatPrice(27, "USD")).toEqual("$27.00");
    expect(formatPrice(100, "USD")).toEqual("$100.00");
  });

  test("test decimals", () => {
    expect(formatPrice(0.0, "USD")).toEqual("$0.00");
    expect(formatPrice(0.0, "USD")).toEqual("$0.00");
    expect(formatPrice(0.0, "USD")).toEqual("$0.00");

    expect(formatPrice(0.1, "USD")).toEqual("$0.10");
    expect(formatPrice(0.01, "USD")).toEqual("$0.01");
    expect(formatPrice(0.001, "USD")).toEqual("$0.00");
    expect(formatPrice(0.0001, "USD")).toEqual("$0.00");

    expect(formatPrice(27.274, "USD")).toEqual("$27.27");
    expect(formatPrice(27.275, "USD")).toEqual("$27.28");
    expect(formatPrice(27.277, "USD")).toEqual("$27.28");

    expect(formatPrice(100.999, "USD")).toEqual("$101.00");
    expect(formatPrice(100.995, "USD")).toEqual("$101.00");
    expect(formatPrice(100.9909, "USD")).toEqual("$100.99");
    expect(formatPrice(100.899, "USD")).toEqual("$100.90");
  });

  test("test negatives", () => {
    expect(formatPrice(-1, "USD")).toEqual("-");
    expect(formatPrice(-1.0, "USD")).toEqual("-");
    expect(formatPrice(-12.0, "USD")).toEqual("-");
    expect(formatPrice(-100.009, "USD")).toEqual("-");
  });
});

describe("Format Date", () => {
  test("test datetime", () => {
    expect(formatDate("1991-01-10T12:00:00Z")).toEqual("January 1991");
    expect(formatDate("1991-03-10T12:00:00Z")).toEqual("March 1991");
    expect(formatDate("1991-09-10T12:00:00Z")).toEqual("September 1991");
    expect(formatDate("2021-02-10T12:00:00Z")).toEqual("February 2021");
    expect(formatDate("2021-04-10T12:00:00Z")).toEqual("April 2021");
    expect(formatDate("2021-10-10T12:00:00Z")).toEqual("October 2021");
  });

  test("test date", () => {
    expect(formatDate("10-01-1991")).toEqual("October 1991");
    expect(formatDate("11-03-1991")).toEqual("November 1991");
    expect(formatDate("01-02-2021")).toEqual("January 2021");
    expect(formatDate("02-04-2021")).toEqual("February 2021");

    expect(formatDate("1991-01-10")).toEqual("January 1991");
    expect(formatDate("1991-03-10")).toEqual("March 1991");
    expect(formatDate("2021-02-10")).toEqual("February 2021");
    expect(formatDate("2021-04-10")).toEqual("April 2021");
  });

  test("test date", () => {
    expect(formatDate("")).toEqual("");
    expect(formatDate("abcadsad")).toEqual("");
  });
});

describe("Format Millis", () => {
  test("seconds", () => {
    expect(formatMillis(0)).toEqual("0:00");
    expect(formatMillis(999)).toEqual("0:01");
    expect(formatMillis(1000)).toEqual("0:01");
    expect(formatMillis(27000)).toEqual("0:27");
  });

  test("seconds", () => {
    expect(formatMillis(60000)).toEqual("1:00");
    expect(formatMillis(87000)).toEqual("1:27");
    expect(formatMillis(60999)).toEqual("1:01");
    expect(formatMillis(240000)).toEqual("4:00");
  });

  test("hours", () => {
    expect(formatMillis(3600000)).toEqual("60:00");
    expect(formatMillis(3700000)).toEqual("61:40");
    expect(formatMillis(6000000)).toEqual("100:00");
  });
});
