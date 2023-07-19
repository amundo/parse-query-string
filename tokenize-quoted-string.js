let isQuote = (c) => c === '"';
let isSpace = (c) => c === ' ';
let isntEmptyString = (c) => c !== '';

let tokenizeQuotedString = (query) => {
  let insideQuotedString = false;
  let currentToken = '';

  let tokens = [];

  for (let c of query) {
    if (isQuote(c) && !insideQuotedString) {
      insideQuotedString = true;
    } else if (isQuote(c) && insideQuotedString) {
      insideQuotedString = false;
    }

    if (isSpace(c) && !insideQuotedString) {
      if (isntEmptyString(currentToken)) {
        tokens.push(currentToken.replaceAll(`"`, ''))
        currentToken = ''
      }
    } else {
      currentToken += c
    }
  }

  if (isntEmptyString(currentToken)) {
    tokens.push(currentToken.replace(/"/g, ''));
  }

  return tokens;
};

export { tokenizeQuotedString };
