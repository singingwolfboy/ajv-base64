const Ajv = require("ajv");
const ajv = new Ajv();
require("./index")(ajv);

const schema = {
  type: "string",
  format: "base64"
};

test("valid base64", () => {
  const validate = ajv.compile(schema);
  const data = "SGVsbG8sIHdvcmxkIQ=="; // Hello, world!
  const valid = validate(data);
  expect(valid).toBe(true);
});

test("obvious invalid base64", () => {
  const validate = ajv.compile(schema);
  const data = "🔥";
  const valid = validate(data);
  expect(valid).toBe(false);
  expect(validate.errors).toEqual([
    {
      dataPath: "",
      keyword: "format",
      message: 'should match format "base64"',
      params: { format: "base64" },
      schemaPath: "#/format"
    }
  ]);
});

test("non-obvious invalid base64", () => {
  const validate = ajv.compile(schema);
  const data = "SGVsbG8sIHdvcmxkIQ==="; // extra =
  const valid = validate(data);
  expect(valid).toBe(false);
  expect(validate.errors).toEqual([
    {
      dataPath: "",
      keyword: "format",
      message: 'should match format "base64"',
      params: { format: "base64" },
      schemaPath: "#/format"
    }
  ]);
});

test("empty string", () => {
  const validate = ajv.compile(schema);
  const data = "";
  const valid = validate(data);
  expect(valid).toBe(false);
  expect(validate.errors).toEqual([
    {
      dataPath: "",
      keyword: "format",
      message: 'should match format "base64"',
      params: { format: "base64" },
      schemaPath: "#/format"
    }
  ]);
});
