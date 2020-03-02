function addBase64Format(ajv) {
  ajv.addFormat(
    "base64",
    // regex source: https://stackoverflow.com/a/5885097/141395
    new RegExp(
      "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$"
    )
  );
}
module.exports = addBase64Format;
