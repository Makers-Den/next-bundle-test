# Next.js Project Size Comparison

This repository contains a comparison of project sizes between Next.js projects structured using the pages directory approach and the app directory approach.

## Introduction

This repository aims to compare the resulting project sizes when adopting either of these approaches. It explores the impact on bundle size and build performance, helping developers make informed decisions about the project structure they choose.

## Comparison Results

The bundle size was analyzed using [Next.js + Webpack Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer "Next.js + Webpack Bundle Analyzer").

### Pages client bundle size

This is the result from from the `pages` branch.

![Pages result](https://github.com/Makers-Den/next-bundle-test/blob/main/public/results/pages.png)

### App client bundle size

This is the result from the `app` branch.

![App Results](https://github.com/Makers-Den/next-bundle-test/blob/main/public/results/app.png)

The client bundle using app dir is 200kb bigger than pages dir.

## Deployment

Run `yarn install` to install all dependencies for a project.

To analyze bundle size run `yarn analyze-bundle` (in the branches `app` or `pages`)
