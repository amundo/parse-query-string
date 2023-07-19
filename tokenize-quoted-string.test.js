import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
import { tokenizeQuotedString } from "./tokenize-quoted-string.js"

Deno.test("Tokenize a string with no quotes", () => {
  let string = "abc"
  let expected = ["abc"]
  assertEquals(tokenizeQuotedString(string), expected)
})

Deno.test("Tokenize a string with one quoted term", () => {
  let string = `"abc"`
  let expected = ["abc"]
  assertEquals(tokenizeQuotedString(string), expected)
})

Deno.test("Tokenize a string with one quoted term", () => {
  let string = `abc def "xyz" "this is a long quoted string"`
  let expected = [
    "abc",
    "def",
    "xyz",
    "this is a long quoted string",
  ]
  assertEquals(tokenizeQuotedString(string), expected)
})
