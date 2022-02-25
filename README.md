# common-breakpoints

This package exports common breakpoints from popular CSS frameworks for use
in CSS-in-JS libraries.

## Example

To use [tailwind]'s breakpoints with [stiches], do the following:

```ts
import { createStitches } from '@stitches/react';
import { tailwindQueries } from 'common-breakpoints';

export const { styled, css } = createStitches({
  media: tailwindQueries,
});
```

And that's all there is to it! Since this library ships with TypeScript
definitions everything will be strongly typed.

## Available Exports

This package exports objects where values can be either numbers (just the
framework nmae) or strings (ends with `Queries`). The keys for each export are
named after their source.

- `default`, `bootstrap`, and `bootstrapQueries` ([source](https://github.com/twbs/bootstrap/blob/a3f27c67e8e3041858e18ac201a384332be14303/scss/_variables.scss#L279-L293))
- `bulma` and `bulmaQueries` ([source](https://bulma.io/documentation/overview/responsiveness/#breakpoints))
- `foundation` and `foundationQueries` ([source](https://get.foundation/sites/docs/media-queries.html))
- `mantine` and `mantineQueries` ([source](https://mantine.dev/theming/responsive/))
- `mui` and `muiQueries` ([source](https://mui.com/customization/breakpoints/#default-breakpoints))
- `pico` and `picoQueries` ([source](https://picocss.com/docs/grid.html))
- `tailwind` and `tailwindQueries` ([source](https://tailwindcss.com/docs/responsive-design))

### Queries Module

You can also import directly from `/queries`:

```ts
// Import the mantine export
import { mantine as queries } from 'common-breakpoints/queries';
// Or import directly from the mantine queries
import mantine from 'common-breakpoints/queries/mantine';
```

In any case, however you choose to import (root, `/queries`, or
`/queries/<framework>`), tree-shaking will ensure that you end up with the same
bundle output. Using `import { mantineQueries } from 'common-breakpoints'`, for
instance, results in the following bundle output from [esbuild]:

```js
(() => {
  // node_modules/common-breakpoints/queries/bootstrap.ts
  var bootstrap_default = {
    sm: '(min-width: 540px)',
    md: '(min-width: 720px)',
    lg: '(min-width: 960px)',
    xl: '(min-width: 1140px)',
    xxl: '(min-width: 1320px)',
  };
})();
```

Yes, `bootstrap.ts` is correct because the `mantine` module actually just
re-exports the bootstrap module as they use the same breakpoints.

## License

MIT

[esbuild]: https://esbuild.github.io/ 'An extremely fast JavaScript bundler'
[tailwind]: https://tailwindcss.com/ 'Rapidly build modern websites without ever leaving your HTML.'
[stiches]: https://stitches.dev/ 'Style your components with confidence'
