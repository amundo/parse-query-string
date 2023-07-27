// parse-query-string.js
import { tokenizeQuotedString } from "./tokenize-quoted-string.js"
import { parseTermString } from "./parse-term-string.js"

const parseQueryString = (query, options = {}) => {
  const { defaultCategory = "term", shortcuts = {} } = options

  const tokens = tokenizeQuotedString(query)

  let terms = tokens.map((token) =>
    parseTermString(token, { defaultCategory, shortcuts })
  )

  return terms
}

export { parseQueryString }
