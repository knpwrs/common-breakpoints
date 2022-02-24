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

## License

MIT

[tailwind]: https://tailwindcss.com/ 'Rapidly build modern websites without ever leaving your HTML.'
[stiches]: https://stitches.dev/ 'Style your components with confidence'
