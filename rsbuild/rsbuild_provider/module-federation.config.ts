import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'rsbuild_provider',
  exposes: {
    '.': './src/components/ProviderComponent.vue',
  },
  shared: {
    vue: { singleton: true },
  },
});
