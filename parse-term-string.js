let parseTermString = (termString, defaultCategory="term") => {
  if(!termString.includes(":")) {
    return [defaultCategory, termString]
  } else {
    return termString.split(":")
  }
  return termString
}

export {
  parseTermString
}