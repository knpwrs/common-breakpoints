import def, {
  bootstrap,
  bootstrapQueries,
  foundation,
  foundationQueries,
  mantine,
  mantineQueries,
  pico,
  picoQueries,
  tailwind,
  tailwindQueries,
} from './';

test('default export', () => {
  expect(def).toEqual({ lg: 960, md: 720, sm: 540, xl: 1140, xxl: 1320 });
  expect(def).toBe(bootstrap);
});

test('mantine matches bootstrap', () => {
  expect(mantine).toBe(bootstrap);
});

test('tailwind', () => {
  expect(tailwind).toEqual({ sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536 });
});

test('foundation', () => {
  expect(foundation).toEqual({ md: 640, lg: 1024 });
});

test('pico', () => {
  expect(pico).toEqual({ sm: 576, md: 768, lg: 992, xl: 1200 });
});

describe('queries', () => {
  test.each([
    ['default', def, bootstrapQueries],
    ['bootstrap', bootstrap, bootstrapQueries],
    ['mantine', mantine, mantineQueries],
    ['tailwind', tailwind, tailwindQueries],
    ['foundation', foundation, foundationQueries],
    ['pico', pico, picoQueries],
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
