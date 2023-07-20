let isRegexp = (value) => value.startsWith('/') && value.split('/').length == 3



let handleRegexp = (value) => {
  let [_, regexp, flags] = value.match(/\/(.*)\/(.*)/)
  regexp = new RegExp(regexp, flags)
  return regexp
}

let parseTerm = ([category, value]) => {
  if(isRegexp(value)){
    return [category, handleRegexp(value)]
  } else {
    return [category, value]
  }
}

let parseTermString = (termString, defaultCategory="term") => {
  let [category, term] = ["", ""]

  if(!termString.includes(":")) {
    [category, term] = [defaultCategory, termString]
  } else {
    [category, term] =  termString.split(":")
  }
  return parseTerm([category, term])
}

export {
  parseTermString
}

