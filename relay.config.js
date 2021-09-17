// relay.config.js
module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: './ui',
  schema: './src/schema.gql',
  extensions: ['ts', 'tsx'],
  language: 'typescript',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
};
