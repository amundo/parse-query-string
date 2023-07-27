---
title: Query Language Description
author: Patrick Hall
---

<style>
code {
  background:lightgray;
  padding:4px;
  border-radius: 2px;
  display: inline-block;
  margin:2px;
}
</style>

This library implements a query language that allows users to construct queries
using term-value pairs. The query language supports regular terms and quoted
strings, providing flexibility in constructing complex queries. The language
allows users to specify categories for terms or use a default category when none
is specified explicitly.

## Regular Terms

Regular terms are simple key-value pairs that consist of a term category and its
associated value. The syntax for regular terms is as follows:

```
category:value
```

- `category` is a string representing the category of the term.
- `value` is the value associated with the term.

If a query term does not include a category, it is assumed to belong to a
default category, which can be specified when parsing the query.

## Quoted Strings

Quoted strings allow users to include spaces and special characters within a
single term value. Any characters within a quoted string, including spaces, are
treated as part of the term value. The syntax for quoted strings is as follows:

```
category:"quoted value"
```

- `category` is a string representing the category of the term.
- `"quoted value"` is the value associated with the term, enclosed in double
  quotes.

Quoted strings are useful when a term value contains spaces or special
characters that would otherwise be interpreted as delimiters between separate
terms.

## Regular Expressions

The query language also supports regular expressions for more advanced pattern
matching. A regular expression term is identified by enclosing the expression in
forward slashes (`/`). The syntax for regular expressions is as follows:

```
category:/regular_expression/
```

- `category` is a string representing the category of the term.
- `/regular_expression/` is the regular expression associated with the term,
  enclosed in forward slashes.

To use a regular expression in a query, the value of a term must start and end
with forward slashes, and it may include any valid JavaScript regular expression
pattern inside the slashes. The `parseQueryString` function automatically
converts such terms into JavaScript `RegExp` objects for use in the query.

## Query Parsing

The `parseQueryString` function takes a query string as input and parses it into
individual term-value pairs. It uses the `parseTermString` function to parse
individual term strings, which handles the categorization of terms and detects
regular expressions.

Examples

Here are some examples of valid queries in the supported query language:

1. **Regular Term**: `name:John`

2. **Quoted String**: `city:"New York"`

3. **Regular Expression**:
   `email:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`

4. **Combination of Terms**: `category:book author:"Jane Doe" year:2023`

In the above examples, each line represents a separate query term. The first
part before the colon (`:`) represents the category (optional), followed by the
term value.

Please note that the provided modules facilitate the parsing of the query
language, and the actual usage and interpretation of the parsed results in a
specific context are left to the application or system implementing these
modules.

## Testing interface

To try out the query language and see resulting data structures, try:

https://amundo.github.io/parse-query-string/parse-query-string-test.html
