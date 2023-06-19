# dataroot.ca

dataroot.ca: Connecting newcomers to vibrant communities in Canada. Discover events, articles, and support to enhance your integration and build a strong network. Join us for seamless community engagement

## Table of Contents

<!-- TOC -->
* [dataroot.ca](#dataroot.ca)
  * [Table of Contents](#table-of-contents)
  * [Overview](#overview)
  * [Usage](#usage)
  * [Requirements](#requirements)
  * [Installation](#installation)
  * [Author Information](#author-information)
<!-- TOC -->

## Overview
@todo
![dataroot.ca ](preview.png "dataroot.ca: Website")

## Usage
@todo


## Requirements

* Nodejs `18.x` or newer.

## Installation
And install dependencies
```
npm install && npm dev
```
visit website http://localhost:5174
## Author Information

This module is maintained by the contributors listed on [GitHub](https://github.com/tkudlicka/dataroot.ca/graphs/contributors).

## Vercel Edge

This starter site is configured to deploy to [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions), which means it will be rendered at an edge location near to your users.

## Installation

The adaptor will add a new `vite.config.ts` within the `adapters/` directory, and a new entry file will be created, such as:

```
└── adapters/
    └── vercel-edge/
        └── vite.config.ts
└── src/
    └── entry.vercel-edge.tsx
```

Additionally, within the `package.json`, the `build.server` script will be updated with the Vercel Edge build.

## Production build

To build the application for production, use the `build` command, this command will automatically run `yarn build.server` and `yarn build.client`:

```shell
yarn build
```

[Read the full guide here](https://github.com/BuilderIO/qwik/blob/main/starters/adapters/vercel-edge/README.md)

## Dev deploy

To deploy the application for development:

```shell
yarn deploy
```

Notice that you might need a [Vercel account](https://docs.Vercel.com/get-started/) in order to complete this step!

## Production deploy

The project is ready to be deployed to Vercel. However, you will need to create a git repository and push the code to it.

You can [deploy your site to Vercel](https://vercel.com/docs/concepts/deployments/overview) either via a Git provider integration or through the Vercel CLI.
