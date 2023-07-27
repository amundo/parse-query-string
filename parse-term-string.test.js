import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
import { parseTermString } from "./parse-term-string.js"

Deno.test("Test query parser with plain term", () => {
  const query = "abc"
  const expected = ["term", "abc"]
  assertEquals(parseTermString(query), expected)
})

Deno.test("Test query parser with prefixed term", () => {
  const query = "category:abc"
  const expected = ["category", "abc"]
  assertEquals(parseTermString(query), expected)
})

Deno.test("Test query parser with whitespace", () => {
  const query = "this is a long value"
  const expected = ["term", "this is a long value"]
  assertEquals(parseTermString(query), expected)
})

Deno.test("Test query parser with whitespace and prefix", () => {
  const query = "category:this is a long value"
  const expected = ["category", "this is a long value"]
  assertEquals(parseTermString(query), expected)
})

Deno.test("Test query parser with regexp notation", () => {
  const query = "/abc/"
  const expected = ["term", /abc/]
  assertEquals(parseTermString(query), expected)
})
