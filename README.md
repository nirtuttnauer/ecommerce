# EStore / Animax

A small storefront demo built with vanilla JavaScript, CSS, and Webpack. It renders a product catalog from local JSON data and lets you show or hide a sample cart sidebar.

## Run locally

Install Node.js and npm, then run from the repository root:

```sh
npm ci
npm start
```

The Webpack development server opens the app in your browser. Use the local URL printed in the terminal if it does not open automatically. Stop the server with Ctrl+C.

## Production build

```sh
npm run build
```

Generated HTML, JavaScript, CSS, and image assets are written to `build/`. Serve that directory with a static web server to preview or deploy the build. Generated files should not be committed.

## Project layout

- `src/index.js`: application entry point and stylesheet import.
- `src/app/`: catalog, product, navigation, and sample cart components.
- `src/Products.json`: local product data, including image URLs.
- `src/template.html`: page template.
- `src/style.css` and `src/assets/`: styles and bundled images.
- `webpack.common.js`, `webpack.dev.js`, `webpack.prod.js`: shared, development, and production build configuration.

## Demo limitations

This is a UI prototype, not a complete shopping platform. The cart is initialized with a sample product; adding products, changing quantities, removing items, and payment processing are not implemented. There is no backend, authentication, or persistent cart storage. Product images referenced by external URLs require network access.

## Verification

`npm run build` checks that the production bundle compiles. There is currently no automated test suite or configured lint script.
