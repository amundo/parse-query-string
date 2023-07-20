import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
import { parseQueryString } from "./parse-query-string.js"

Deno.test("Test query parser with one term", () => {
  const query = "abc"
  const expected = [["term", "abc"]]
  assertEquals(parseQueryString(query), expected)
})

Deno.test("Test query parser with one quoted term", () => {
  const query = `"abc"`
  const expected = [["term", "abc"]]
  assertEquals(parseQueryString(query), expected)
})

Deno.test("Test query parser with two terms", () => {
  const query = "abc xyz"
  const expected = [["term", "abc"], ["term", "xyz"]]
  assertEquals(parseQueryString(query), expected)
})

Deno.test("Test query parser with two quoted terms", () => {
  const query = `"abc" "xyz"`
  const expected = [["term", "abc"], ["term", "xyz"]]
  assertEquals(parseQueryString(query), expected)
})

Deno.test("Test query parser with two quoted terms and one unquoted term", () => {
  const query = `"abc" "def" ghi`
  const expected = ["abc", "def", "ghi"]
    .map(value => ["term", value])
  assertEquals(parseQueryString(query), expected)
})

Deno.test("Test query parser with colon-prefixed category and value", () => {
  const query = "category:value"
  const expected = [["category", "value"]]
  assertEquals(parseQueryString(query), expected)
})

Deno.test("Test query parser with colon-prefixed category and value", () => {
  const query = "otherCategory:otherValue"
  const expected = [["otherCategory", "otherValue"]]
  assertEquals(parseQueryString(query), expected)
})


Deno.test("Test query parser with colon-prefixed category with quoted long value", () => {
  const query = `otherCategory:"long quoted value"`
  const expected = [["otherCategory", "long quoted value"]]
  assertEquals(parseQueryString(query), expected)
})

