import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'm266lax5',
    dataset: 'production',
  },
  studioHost: 'reloadcincy',
  deployment: {
    autoUpdates: true,
  },
});
