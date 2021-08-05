const kebabCase = (str) =>
  str &&
  str
    //.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .split(/\r\n|\r|\n/)
    .map((x) => x.toLowerCase())
    .join('-')

export default kebabCase
