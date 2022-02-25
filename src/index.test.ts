import { execa } from 'execa';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import def, {
  bootstrap,
  bootstrapQueries,
  bulma,
  bulmaQueries,
  foundation,
  foundationQueries,
  mantine,
  mantineQueries,
  mui,
  muiQueries,
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

test('mui', () => {
  expect(mui).toEqual({ xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 });
});

test('foundation', () => {
  expect(foundation).toEqual({ small: 0, medium: 640, large: 1024 });
});

test('pico', () => {
  expect(pico).toEqual({ sm: 576, md: 768, lg: 992, xl: 1200 });
});

test('bulma', () => {
  expect(bulma).toEqual({
    mobile: 0,
    tablet: 769,
    desktop: 1024,
    widescreen: 1216,
    fullhd: 1408,
  });
});

describe('queries', () => {
  test.each([
    ['default', def, bootstrapQueries],
    ['bootstrap', bootstrap, bootstrapQueries],
    ['mantine', mantine, mantineQueries],
    ['tailwind', tailwind, tailwindQueries],
    ['mui', mui, muiQueries],
    ['foundation', foundation, foundationQueries],
    ['pico', pico, picoQueries],
    ['bulma', bulma, bulmaQueries],
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

test('tree shaking', async () => {
  const output = await execa('npx', [
    'esbuild',
    '--bundle',
    join(dirname(fileURLToPath(import.meta.url)), '__fixtures__', 'entry.ts'),
  ]);
  expect(output.stdout).toMatchInlineSnapshot(`
    "(() => {
      // src/queries/bootstrap.ts
      var bootstrap_default = {
        sm: \\"(min-width: 540px)\\",
        md: \\"(min-width: 720px)\\",
        lg: \\"(min-width: 960px)\\",
        xl: \\"(min-width: 1140px)\\",
        xxl: \\"(min-width: 1320px)\\"
      };

      // src/__fixtures__/entry.ts
      console.log(bootstrap_default);
      console.log(bootstrap_default);
    })();"
  `);
});
