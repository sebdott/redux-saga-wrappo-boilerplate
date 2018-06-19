module.exports = {
  extends: [
    // 'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:flowtype/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:react/recommended',
    'plugin:redux-saga/recommended',
    'react-app',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      allowImportExportEverywhere: true,
    },
  },
  plugins: ['babel', 'promise', 'compat', 'redux-saga'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
      webpack: {
        config: 'config/webpack.config.base.js',
      },
    },
  },
  rules: {
    'babel/no-invalid-this': 1,
    'babel/object-curly-spacing': 1,
    'babel/semi': 1,
    'babel/no-unused-expressions': 1,
    camelcase: 0,
    'class-methods-use-this': 1,
    'consistent-return': 0,
    'import/namespace': ['error', {allowComputed: true}],
    'import/prefer-default-export': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/href-no-hash': 0, // might be one of the dependency still using the old version of eslint-plugin-jsx-a11y
    'jsx-a11y/label-has-for': [2, {allowChildren: true}],
    'linebreak-style': 0,
    'no-bitwise': 0,
    'no-plusplus': [1, {allowForLoopAfterthoughts: true}],
    'one-var': [2, {initialized: 'never', uninitialized: 'always'}],
    'prefer-promise-reject-errors': 1,
    'promise/avoid-new': 0,
    'promise/always-return': 'warn',
    radix: [1, 'as-needed'],
    'react/prop-types': [2, {skipUndeclared: true}],
    'redux-saga/no-unhandled-errors': 1,
  },
};
