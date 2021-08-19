module.exports = function check(str, bracketsConfig) {
  let enumeration = bracketsConfig.map(e => e.join(""));    
    for (let i = 0; i < enumeration.length; i++) {
        if (str.includes(enumeration[i])) {
            str = str.replace([enumeration[i]], "");
            i = -1;
        }
    }
    return !str.length;
}
