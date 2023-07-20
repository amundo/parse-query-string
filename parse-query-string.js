import { tokenizeQuotedString } from './tokenize-quoted-string.js';
import { parseTermString } from './parse-term-string.js'

const parseQueryString = (query, defaultPrefix = 'term') => {
  const tokens = tokenizeQuotedString(query);

  return tokens
    .map(token => parseTermString(token, defaultPrefix))
}

export { parseQueryString };
