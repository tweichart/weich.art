module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: "babel-eslint",
    },
    extends: [
        "@nuxtjs",
        "plugin:nuxt/recommended"
    ],
    plugins: [],
    rules: {
        indent: ["error", 4],
        "vue/script-indent": ["error", 4],
        "vue/html-indent": ["error", 4],
        "space-before-function-paren": ["error", "never"],
        "comma-dangle": ["error", {
            arrays: "never",
            objects: "only-multiline",
            imports: "never",
            exports: "never",
            functions: "never",
        }],
        quotes: ["error", "double"],
        semi: ["error", "always"],
    },
};
