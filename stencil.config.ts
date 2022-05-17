import { Config } from '@stencil/core';

export const config: Config = {
  globalStyle: 'src/global/global.css',
  namespace: 'stencil-starter-on',
  outputTargets: [
    {
      type: 'dist',
      copy: [
        {
          src: '**/*.{jpg,png,svg}',
          dest: 'dist/components/assets',
          warn: true,
        }
      ],
      esmLoaderPath: '../loader',
    },
  ],
  devServer: {
    initialLoadUrl: 'ON-your-styleguide',
  },
};
