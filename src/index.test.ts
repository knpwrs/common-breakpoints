import def, { bootstrap, bootstrapQueries, mantine, mantineQueries } from './';

test('default export', () => {
  expect(def).toEqual({ lg: 960, md: 720, sm: 540, xl: 1140, xxl: 1320 });
  expect(def).toBe(bootstrap);
});

test('mantine matches bootstrap', () => {
  expect(mantine).toBe(bootstrap);
  expect(mantineQueries).toBe(bootstrapQueries);
});

describe('queries', () => {
  test.each([
    ['default', def, bootstrapQueries],
    ['bootstrap', bootstrap, bootstrapQueries],
    ['mantine', mantine, mantineQueries],
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
