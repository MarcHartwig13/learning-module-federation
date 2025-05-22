import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'rsbuild_consumer',
  remotes: {
    'provider': 'rsbuild_provider@http://localhost:3001/mf-manifest.json',
  },
  shareStrategy: 'loaded-first',
  shared: {
    vue: { singleton: true },
  },
});
