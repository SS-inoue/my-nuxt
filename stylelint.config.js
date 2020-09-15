module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: ['stylelint-scss'],
  ignoreFiles: ['font/dist/**/*'],
  rules: {
    'function-name-case': [
      'lower',
      { ignoreFunctions: ['findColorInvert', 'mergeColorMaps'] },
    ],
    'declaration-empty-line-before': null,
    'font-family-no-missing-generic-family-keyword': [
      true,
      {
        ignoreFontFamilies: ['Material Design Icons'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'function',
          'if',
          'for',
          'each',
          'include',
          'mixin',
          'content',
          'return',
          'else',
          'warn',
        ],
      },
    ],
  },
}
