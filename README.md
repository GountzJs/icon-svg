# SVG Component

A lightweight, modern Web Component library for rendering SVG icons with ease. This library uses Shadow DOM for style encapsulation and `isomorphic-dompurify` for security.

## Installation

You can install the library using your favorite package manager:

```bash
npm install @gountzjs/icon-svg
```

## How to Use

### 1. Register your icons manually

This library does **not** come with pre-included icons. You must manually register the icons you want to use in your application's entry file (e.g., `main.ts` or `app.ts`).

Import the `registry` and use `addIcons` to provide your SVG icon functions:

```typescript
import { registry, Icons } from '@gountzjs/icon-svg';

const myIcons: Icons = {
  'arrow-right': (color: string) => `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  `,
  'user': (color: string) => `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  `
}

registry.addIcons(myIcons);
```

> **Note:** The icon functions receive a `color` argument that you should inject into your SVG string (e.g., in the `fill` or `stroke` attribute).

### 2. Use the component

Once registered, you can use the `<icon-svg>` element anywhere in your HTML or templates:

```html
<!-- Default: 24px, color #fff -->
<icon-svg name="arrow-right"></icon-svg>
```

```html
<!-- Custom color and size -->
<icon-svg name="user" color="#ff4500" size="32px"></icon-svg>
```

## Component API

The `<icon-svg>` component supports the following attributes:

| Attribute | Required | Default | Description                             |
|-----------|----------|---------|-----------------------------------------|
| `name`    | Yes      | -       | The name of the registered icon.        |
| `color`   | No       | `#fff`  | The color to pass to the icon function. |
| `size`    | No       | `24px`  | The width and height of the component.  |

## Development

If you want to contribute or build the library locally:

```bash
# Install dependencies
pnpm install
```

```bash
# Build the library
pnpm run build
```

## License

[MIT](./LICENSE)
