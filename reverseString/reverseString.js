function reverseString(str) {
  const arr = [...str];
  const reverse = [];

  arr.forEach(char => {
    reverse.unshift(char)
  })
  
  return reverse.join('');
}

module.exports = reverseString