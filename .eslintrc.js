module.exports = {
    "env": {
        "browser": true,
        "node": true,
	"mongo": true,
	"es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 5
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "plugins": [
      "security"
    ],
    "extends": [
      "plugin:security/recommended"
    ]
};
