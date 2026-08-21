const input = require("./example");

function longestCommonPrefix(strs) {
  const shortest = strs.reduce((min, cur) => {
    return cur.length < min.length ? cur : min;
  }, strs[0]);

  for (let i = shortest.length; i > 0; i--) {
    const commonPrefix = shortest.slice(0, i);
    const isCommon = strs.every((str) => str.startsWith(commonPrefix));

    if (isCommon) return commonPrefix;
  }

  return "";
}

console.log(longestCommonPrefix(input));
