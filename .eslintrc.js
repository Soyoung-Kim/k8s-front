module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-unused-vars': 0,
        'vue/no-unused-components': 0,
        'no-unreachable': 0,
        'no-empty': 0,
        'no-prototype-builtins': 0,
        'no-undef': 2,
        'no-irregular-whitespace': 2,
        'vue/require-prop-type-constructor': 2,
        'no-useless-escape': 2,
        'prettier/prettier': ['error', { tabWidth: 4 }],
    },
};
