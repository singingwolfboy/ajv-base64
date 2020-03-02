# ajv-base64

Adds a `base64` format to [Ajv](https://ajv.js.org).

## Install

```
npm install ajv-base64
```

or

```
yarn add ajv-base64
```

Note that this package isn't very useful without [Ajv](https://ajv.js.org) itself, so you should install that as well.

## Setup

```js
const Ajv = require("ajv");
const ajv = new Ajv();
require("ajv-base64")(ajv);
```

## Usage

When defining your JSON schema, use the [`format` keyword](https://ajv.js.org/keywords.html#format) with the value set to `base64`. For example:

```json
{
  "type": "object",
  "properties": {
    "cursor": {
      "type": "string",
      "format": "base64"
    }
  }
}
```

Valid data:

- `{ cursor: "YWJj" }`
- `{ cursor: "SGVsbG8sIHdvcmxkIQ==" }`

Invalid data:

- `{ cursor: "" }`
- `{ cursor: "Hello, world!" }`
- `{ cursor: "🔥" }`
