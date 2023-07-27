let isRegexp = (value) => value.startsWith("/") && value.split("/").length === 3

let handleRegexp = (value) => {
  let [_, regexp, flags] = value.match(/\/(.*)\/(.*)/)
  regexp = new RegExp(regexp, flags)
  return regexp
}

let handleTerm = ([category, value]) => {
  if (isRegexp(value)) {
    return [category, handleRegexp(value)]
  } else {
    return [category, value]
  }
}

let parseTermString = (termString, options = {}) => {
  let { defaultCategory = "term", shortcuts = {} } = options

  let [category, term] = ["", ""]

  if (!termString.includes(":")) {
    ;[category, term] = [defaultCategory, termString]
  } else {
    ;[category, term] = termString.split(":")
  }

  if (shortcuts[category]) {
    category = shortcuts[category]
  }

  return handleTerm([category, term])
}

export { parseTermString }
