module.exports = {
  // ...
  extends: [
    // ...
    "@nuxtjs/eslint-config",
  ],
  rules: {
    // ...
    "nuxt/no-globals-in-created": "error",
    "no-restricted-globals": [
      "error",
      {
        name: "window",
        message: 'Use `typeof window !== "undefined"` instead.',
      },
    ],
    "no-restricted-properties": [
      "error",
      {
        object: "global",
        property: "window",
        message: 'Use `typeof window !== "undefined"` instead.',
      },
    ],
  },
};
