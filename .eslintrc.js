/* eslint-disable quote-props */
module.exports = {
    env: {
        'browser': true,
        'es6': true,
        'jest': true
    },
    ignorePatterns: [
        '**/*.d.ts',
        'dist'
    ],
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'airbnb'
    ],
    plugins: [
        'putout',
        'react-hooks',
        'simple-import-sort'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },
    rules: {
        'linebreak-style': ['error', 'windows'],
        'comma-dangle': ['error', 'never'],
        'indent': 'off',
        'max-len': ['warn', 150, {
            'ignorePattern': '^import\\s.+\\sfrom\\s.+;$'
        }],
        'newline-before-return': 'error',
        'object-curly-newline': ['error', {
            'ObjectExpression': { 'minProperties': 4, 'multiline': true, 'consistent': true },
            'ObjectPattern': { 'minProperties': 4, 'multiline': true, 'consistent': true }
        }],
        'arrow-parens': ['error', 'as-needed'],

        'import/extensions': ['error', {
            'ts': 'never',
            'tsx': 'never'
        }],
        'import/no-extraneous-dependencies': 'error',
        'import/order': 'off',
        'import/newline-after-import': ['error', { 'count': 2 }],
        'simple-import-sort/imports': ['error', {
            'groups': [
                [
                    '^\\u0000' // side effect imports
                ],
                [
                    '^react', '^[^.]' // npm imports
                ],
                [
                    '^core/dependencies', '^\\u0000core/dependencies'
                ],
                [
                    '^core/',
                    '^core/features/common',
                    '^core/features/'
                ],
                [
                    '^media-management/',
                    '^media-management/features/common',
                    '^media-management/features/'
                ],
                [
                    '^dependencies/', '^\\u0000dependencies'
                ],
                [
                    '^nswag/',
                    '^admin/',
                    '^admin/features/common',
                    '^admin/features',
                    '^clinical-trials/',
                    '^clinical-trials/features/common',
                    '^clinical-trials/features',
                    '^events/',
                    '^events/features/common',
                    '^events/features',
                    '^media/',
                    '^media/features/common',
                    '^media/features',
                    '^news/',
                    '^news/features/common',
                    '^news/features',
                    '^organizations/',
                    '^organizations/features/common',
                    '^organizations/features',
                    '^people/',
                    '^people/features/common',
                    '^people/features',
                    '^root/',
                    '^root/features/common',
                    '^root/features'
                ],
                [
                    '^\\.' // some edge cases
                ],
                [
                    '^stories/'
                ],
                [
                    'styles/images/.*\\.(png|gif|jpg|jpeg)$',
                    'styles/icons/.*\\.svg$',
                    '\\.s?css$',
                    '^\\u0000.*\\.s?css$'
                ]
            ]
        }],

        'operator-linebreak': ['error', 'before', {
            'overrides': {
                '=': 'ignore',
                '&&': 'ignore'
            }
        }],
        'quote-props': ['error', 'consistent-as-needed'],
        'array-element-newline': ['error', 'consistent'],
        'array-bracket-newline': ['error', 'consistent'],
        'no-case-declarations': 'off',
        'class-methods-use-this': 'off',
        'arrow-body-style': 'off',
        'lines-between-class-members': 'off',
        'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
        'no-array-constructor': 'off',
        'no-plusplus': 'off',
        'no-param-reassign': 'off',
        'no-confusing-arrow': 'off',
        'no-mixed-operators': 'off',
        'no-nested-ternary': 'off',
        'no-unused-vars': 'off', // used @typescript-eslint rule
        'semi': 'off', // used @typescript-eslint rule
        'no-use-before-define': 'off', // used @typescript-eslint rule
        'no-undef': 'off',
        'no-underscore-dangle': ['error', { 'allowAfterThis': true }],
        'no-multiple-empty-lines': ['error', { 'max': 2, 'maxEOF': 0, 'maxBOF': 0 }],
        'no-shadow': 'off',
        'no-loop-func': 'off',
        'no-useless-constructor': 'off',
        'no-empty-function': 'off',
        'no-redeclare': 'off',
        'default-param-last': 'off',

        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-filename-extension': ['warn', { 'extensions': ['.tsx', '.jsx'] }],
        'react/jsx-fragments': ['error', 'element'],
        'react/static-property-placement': ['error', 'static public field'],
        'react/jsx-curly-newline': ['error', { 'multiline': 'require', 'singleline': 'consistent' }],
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/no-danger': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/no-array-index-key': 'off',
        'react/prefer-stateless-function': 'off',
        'react/sort-comp': 'off',
        'react/jsx-boolean-value': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/no-did-update-set-state': 'off',
        'react/no-unescaped-entities': 'off',
        'react/state-in-constructor': 'off',
        'react/button-has-type': 'off',
        'react/jsx-sort-props': ['error', {
            'callbacksLast': true,
            'shorthandLast': true,
            'noSortAlphabetically': true,
            'reservedFirst': ['key', 'ref']
        }],
        'react/jsx-key': 'error',
        'react/function-component-definition': ['error', {
            'namedComponents': 'function-declaration',
            'unnamedComponents': 'arrow-function'
        }],
        'react/no-unstable-nested-components': ['error', {
            'allowAsProps': true
        }],
        'react/jsx-no-useless-fragment': ['error', {
            'allowExpressions': true
        }],

        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        'jsx-a11y/label-has-associated-control': ['error', {
            'controlComponents': ['ValidationInput']
        }],
        'jsx-a11y/anchor-is-valid': 'off',

        'putout/single-property-destructuring': 'error',

        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-inferrable-types': ['error', {
            'ignoreParameters': true,
            'ignoreProperties': true
        }],
        '@typescript-eslint/no-unused-vars': ['error', {
            'vars': 'all',
            'args': 'after-used',
            'ignoreRestSiblings': true
        }],
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/semi': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-loop-func': 'error',
        '@typescript-eslint/no-useless-constructor': ['error'],
        '@typescript-eslint/no-empty-function': ['error'],
        '@typescript-eslint/no-redeclare': ['error'],
        '@typescript-eslint/indent': ['error', 4, { 'SwitchCase': 1 }],
        '@typescript-eslint/default-param-last': 'error',

        // custom rules
        'no-relative-imports': ['error', {
            'ignoredPatterns': ['scss$'],
            'rootFolder': 'src'
        }],
        'no-core-imports-full-path': ['error']
    },
    globals: {
        'gtag': 'readonly',
        'google': 'readonly'
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                paths: ['./src']
            }
        },
        'import/internal-regex': '^core/',
        react: {
            version: 'detect'
        }
    },
    overrides: [
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
                'import/no-extraneous-dependencies': 'off'
            }
        },
        {
            files: ['*.stories.tsx'],
            rules: {
                'react/function-component-definition': 'off'
            }
        }
    ]
};
