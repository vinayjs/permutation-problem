// Given a string and a pattern , find out if the string contains any permutation of the pattern.

// permutation is defined as the re-arranging of the characters of the string.
// example: "abc" has the following six permutations:
// 1. abc
// 2. acb
// 3. bac
// 4. bca
// 5. cab
// 6. cba

// *  if a string has  'n' distinct characters, it will have n! permutations.

// Input: String="oidbcaf", Pattern="abc"
// Output: true
// Explanation: The string contains "bca" which is a permutation of the given pattern.

const findPerm = (str, pattern) => {
  let windowStart = 0,
    matched = 0,
    charFreq = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    // console.log(char)
    if (!(char in charFreq)) {
      charFreq[char] = 0;
    }
    charFreq[char] += 1;
    console.log(charFreq);
  }
  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFreq) {
      charFreq[rightChar] -= 1;
      console.log(charFreq);
      if (charFreq[rightChar] === 0) {
        matched += 1;
        console.log(matched);
      }
    }
    if (matched === Object.keys(charFreq).length) {
      return true;
    }
    // console.log(charFreq, matched)
    if (windowEnd >= pattern.length - 1) {
      leftChar = str[windowStart];
      // console.log(leftChar, "leftchar")
      windowStart += 1;
      if (leftChar in charFreq) {
        if (charcFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charcFrequency[leftChar] += 1;
      }
    }
  }
  return false;
};

console.log(findPerm("oidbcaf", "abc"));
