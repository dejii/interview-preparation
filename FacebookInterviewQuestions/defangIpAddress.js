/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  // return address.replace(/\./g, "[.]")
  // return address.split('.').join('[.]');
  let result = [];
  for (let ch of address) {
    if (ch === ".") {
      result.push("[.]");
    } else {
      result.push(ch);
    }
  }
  return result.join("");
};
