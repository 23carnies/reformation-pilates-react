module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": 2021, // Update to a specific ECMAScript version
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
    },
    "globals": {
        "process": true
    }
}
