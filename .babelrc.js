const env = process.env.BABEL_ENV || process.env.NODE_ENV;
const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  'syntax-trailing-function-commas',
  [
    'import',
    {
      libraryName: 'antd',
      libraryDirectory: env === 'test' ? 'lib' : 'es',
      style: true,
    },
  ],
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
  [
    '@babel/plugin-transform-regenerator',
    {
      asyncGenerators: false,
      generators: true,
      async: false,
    },
  ],
  [
    'module:fast-async',
    {
      useRuntimeModule: true,
    },
  ],
  '@babel/plugin-proposal-optional-catch-binding',
  'react-loadable/babel',
];
const presets = [
  '@babel/preset-flow',
  [
    '@babel/preset-env',
    {
      exclude: ['transform-async-to-generator'],
      modules: env === 'test' ? 'commonjs' : false,
      useBuiltIns: 'entry',
    },
  ],
  [
    '@babel/preset-react',
    {
      development: env === 'development',
    },
  ],
];
const options = {};

if (env === 'production') {
  plugins.push.apply(plugins, [
    'transform-react-remove-prop-types',
    '@babel/plugin-transform-react-inline-elements',
    '@babel/plugin-transform-react-constant-elements',
  ]);
} else if (env === 'test') {
  options['sourceMaps'] = 'both';
  plugins.push.apply(plugins, [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'lodash-es': 'lodash',
        },
      },
    ],
    'dynamic-import-node-babel-7',
  ]);
}

module.exports = {...options, plugins, presets};
