# Next.js Project Size Comparison

This repository contains a comparison of project sizes between Next.js projects structured using the pages directory approach and the app directory approach.

## Introduction

Next.js is a popular React framework for building server-side rendered (SSR) and static websites. It provides flexibility in structuring your project, and two commonly used approaches are organizing files within the pages directory or using the app directory.

This repository aims to compare the resulting project sizes when adopting either of these approaches. It explores the impact on bundle size and build performance, helping developers make informed decisions about the project structure they choose.

## Comparison Results

The bundle size was analyzed using [Next.js + Webpack Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer "Next.js + Webpack Bundle Analyzer").

### Pages client bundle size
[Pages result](https://github.com/Makers-Den/next-bundle-test/blob/main/public/results/pages.png)

### App client bundle size
[App Results](https://github.com/Makers-Den/next-bundle-test/blob/main/public/results/app.png)

The client bundle using app dir is 200kb bigger than pages dir.

## Deployment

Run `yarn install` to install all dependencies for a project.

After installing all dependencies run `yarn dev` to run project locally on [localhost](http://localhost:3000/ 'localhost')

To analyze bundle size run `yarn analyze-bundle`
