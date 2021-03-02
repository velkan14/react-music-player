import { createSorter } from "./Sort";

const unsorted = [
  { letters: "abc", numbers: 123 },
  { letters: "ecv", numbers: 1230 },
  { letters: "dfc", numbers: 223 },
  { letters: "wda", numbers: 323 },
];

test("test sort letters ASC", () => {
  const sorterLetterAsc = createSorter({
    property: "letters",
    direction: "ASC",
  });

  expect(unsorted.slice().sort(sorterLetterAsc)).toEqual([
    { letters: "abc", numbers: 123 },
    { letters: "dfc", numbers: 223 },
    { letters: "ecv", numbers: 1230 },
    { letters: "wda", numbers: 323 },
  ]);
});

test("test sort numbers ASC", () => {
  const sorterNumbersAsc = createSorter({
    property: "numbers",
    direction: "ASC",
  });

  expect(unsorted.slice().sort(sorterNumbersAsc)).toEqual([
    { letters: "abc", numbers: 123 },
    { letters: "dfc", numbers: 223 },
    { letters: "wda", numbers: 323 },
    { letters: "ecv", numbers: 1230 },
  ]);
});

test("test sort letters DESC", () => {
  const sorterLetterDesc = createSorter({
    property: "letters",
    direction: "DESC",
  });

  expect(unsorted.slice().sort(sorterLetterDesc)).toEqual([
    { letters: "wda", numbers: 323 },
    { letters: "ecv", numbers: 1230 },
    { letters: "dfc", numbers: 223 },
    { letters: "abc", numbers: 123 },
  ]);
});

test("test sort numbers DESC", () => {
  const sorterNumbersDesc = createSorter({
    property: "numbers",
    direction: "DESC",
  });

  expect(unsorted.slice().sort(sorterNumbersDesc)).toEqual([
    { letters: "ecv", numbers: 1230 },
    { letters: "wda", numbers: 323 },
    { letters: "dfc", numbers: 223 },
    { letters: "abc", numbers: 123 },
  ]);
});
