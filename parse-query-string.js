import { tokenizeQuotedString } from './tokenize-quoted-string.js';
import { parseTermString } from './parse-term-string.js'

const parseQueryString = (query, defaultPrefix = 'term') => {
  const tokens = tokenizeQuotedString(query);

  const result = [];
  for (let token of tokens) {
    if (token.includes(':')) {
      const [prefix, term] = token.split(':');
      result.push([prefix, term]);
    } else {
      result.push([defaultPrefix, token]);
    }
  }

  return result;
};

export { parseQueryString };
