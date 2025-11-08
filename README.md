# Atlas Website

![GitHub contributors](https://img.shields.io/github/contributors/maxvdec/atlas-web)
![GitHub last commit](https://img.shields.io/github/last-commit/maxvdec/atlas-web)
![Tests](https://github.com/maxvdec/atlas-web/actions/workflows/build.yaml/badge.svg)
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/maxvdec/atlas-web)
![GitHub Repo stars](https://img.shields.io/github/stars/maxvdec/atlas-web)

This repository contains the source code for the Atlas Website. It is built using modern web technologies to provide an engaging and informative experience for visitors.

It will contain the documentation as well as some tutorials and resources related to Atlas.

Check Atlas out at: [maxvdec/atlas](https://github.com/maxvdec/atlas)

The website is not yet live, but stay tuned for updates!

## Getting Started

To contribute to the website, clone the repository and follow the setup instructions here:

### Install the required dependencies

We use `bun` as our package manager. Make sure you have it installed. Then run:

```bash
bun install
```

### Run the development server

To start the development server, run:

```bash
bun dev
```

The website will be available at `http://localhost:4321`.

### Build for production

To build the website for production, run:

```bash
bun run build
```

The built files will be located in the `dist` directory.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the coding style and conventions used in the project.

## Our Structure

We use the following structure for our project:
* `src/pages/index.astro` - The main landing page of the website.
* `src/components/` - Reusable components used throughout the website.
* `public/` - Static assets such as images and fonts.
* `src/styles/` - Global styles and theming.
* `src/content/` - Markdown files for documentation and tutorials.
* `dist/` - The output directory for the built website.
* `src/pages/*.svelte` - Svelte pages that respond to routes on the website.