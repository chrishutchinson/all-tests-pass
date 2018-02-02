/**
 * Week 3 - Largest Common Substring
 *
 * Given two strings, return either a string that matches the largest common substring or false.
 *
 * Examples:
 * largestCommonSubstring("foo", "bar"); // false
 * largestCommonSubstring("foobarbaz", "foo"); // "foo"
 * largestCommonSubstring("foobarbaz", "bazbaz"); // "baz"
 * largestCommonSubstring("the quick brown fox", "i like brown as a color"); // "brown"
 **/

// Un-minified solution
// let g = (t, s) =>
//   s
//     .split("")
//     .reduce(
//       (a, l, i) => [
//         ...a,
//         ...s.split("").map((_, j) => s.slice(i, j + 1).trim())
//       ],
//       []
//     )
//     .filter(a => !!a && t.includes(a))
//     .sort((a, b) => b.length - a.length);
// let largestCommonSubstring = (o, t) => {
//   let m = [...g(o, t), ...g(t, o)];
//   return m.length > 0 && m[0];
// };

// Minified solution - 246 characters
let g=(t,s)=>s.split("").reduce((a,l,i)=>[...a,...s.split("").map((_,j)=>s.slice(i,j+1).trim())],[]).filter(a=>!!a&&t.includes(a)).sort((a,b)=>b.length-a.length),largestCommonSubstring=(o,t)=>{let m=[...g(o,t),...g(t,o)];return m.length>0&&m[0]};

// Don't edit anything after this line.

// Tests!
assertEqual(largestCommonSubstring("foo", "foo"), "foo", "exact string match");
assertEqual(largestCommonSubstring("foo", "bar"), false, "nothing matches");
assertEqual(largestCommonSubstring("foobarbaz", "bar"), "bar", "partial match");
assertEqual(
  largestCommonSubstring("foofoobarfoo", "foo"),
  "foo",
  "multiple matches"
);
assertEqual(
  largestCommonSubstring("bears are big and scary", "my bear's name is Teddy"),
  "bear",
  "substring on bear"
);

console.log("All clear 🎉");

/**
 * Basic assert.
 *
 * Example: assert(foo == true, "Foo equal true");
 *
 * @param assertion
 * @param message
 */
function assert(assertion, message) {
  if (!assertion) {
    console.trace();
    throw !!message ? `Assertion fail: ${message}.` : `Assertion fail.`;
  } else {
    console.log(!!message ? `Pass: ${message}` : "Assertion passed.");
  }
}

/**
 * Helper function for deep object equal.
 *
 * Example: assertEqual({foo: "bar"}, {foo: "bar"}, "Objects equal.");
 *
 * @param first
 * @param second
 * @param message
 */
function assertObjectEqual(first, second, message) {
  if (!first || !second) {
    throw !!message ? `Assertion fail: ${message}.` : `Assertion fail.`;
  }

  let firstKeys = Object.keys(first),
    secondKeys = Object.keys(second);

  if (firstKeys.length !== secondKeys.length) {
    throw !!message ? `Assertion fail: ${message}.` : `Assertion fail.`;
  }

  for (let key in firstKeys) {
    if (typeof first[key] === "object") {
      assertObjectEqual(first[key], second[key], message);
    } else if (first[key] !== second[key]) {
      throw !!message ? `Assertion fail: ${message}.` : `Assertion fail.`;
    }
  }

  console.log(!!message ? `Pass: ${message}` : "Assertion passed.");
}

/**
 * Assert equal.
 *
 * Example: assertEqual(true, true, "True equals true.");
 *
 * @param first
 * @param second
 * @param message
 */
function assertEqual(first, second, message) {
  if (typeof first === "object") {
    assertObjectEqual(first, second, message);
  } else {
    assert(first === second, message);
  }
}
