import def, {
  bootstrap,
  bootstrapQueries,
  foundation,
  foundationQueries,
  mantine,
  mantineQueries,
} from './';

test('default export', () => {
  expect(def).toEqual({ lg: 960, md: 720, sm: 540, xl: 1140, xxl: 1320 });
  expect(def).toBe(bootstrap);
});

test('mantine matches bootstrap', () => {
  expect(mantine).toBe(bootstrap);
});

test('foundation', () => {
  expect(foundation).toEqual({ md: 640, lg: 1024 });
});

describe('queries', () => {
  test.each([
    ['default', def, bootstrapQueries],
    ['bootstrap', bootstrap, bootstrapQueries],
    ['mantine', mantine, mantineQueries],
    ['foundation', foundation, foundationQueries],
  ])('%s', (_name, numbers, queries) => {
    expect(queries).toEqual(
      Object.fromEntries(
        Object.entries(numbers).map(([key, num]) => [
          key,
          `(min-width: ${num}px)`,
        ]),
      ),
    );
  });
});
