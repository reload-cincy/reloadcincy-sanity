import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

const singletonTypes = ['home', 'privacyPolicy', 'contactBlock'];

export default defineConfig({
  name: 'default',
  title: 'reloadcincy-sanity',

  projectId: 'm266lax5',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Home')
              .id('home')
              .child(S.document().schemaType('home').documentId('home')),

            S.documentTypeListItem('event').title('Events (past and present)'),
            S.documentTypeListItem('member').title('Current Band Members'),

            S.listItem()
              .title('Contact Block (all pages)')
              .id('contactBlock')
              .child(
                S.document()
                  .schemaType('contactBlock')
                  .documentId('contactBlock'),
              ),

            S.documentTypeListItem('listenFile').title('Audio Files'),
            S.documentTypeListItem('remoteVideo').title('YouTube Videos'),

            S.listItem()
              .title('Privacy Policy')
              .id('privacyPolicy')
              .child(
                S.document()
                  .schemaType('privacyPolicy')
                  .documentId('privacyPolicy'),
              ),
          ]),
    }),
    // visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(
        ({ schemaType }) => !singletonTypes.includes(schemaType),
      ),
  },
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.includes(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
