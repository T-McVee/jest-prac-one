/* return str.replace(/[a-z]/g, (char) =>
    String.fromCharCode(
      ((char.charCodeAt(0) - 97 + shift) % 26) + 97
    )
  ); */

    // if char = Uppercase use 65 - 91
    // if char = Lowercase use 97 - 122

function caesar(str, key) {
  if (key === 0) return str;
  
  const upperCase = 65;
  const lowerCase = 97;

  const arr = [...str]
  
  const encrypted = arr.map(char => 
    char.replace(/\w/, letter => {
      let charSet; 

      letter.charCodeAt(0) < 97 ? 
        charSet = upperCase : 
        charSet = lowerCase;

      const newChar = (((parseInt(letter.charCodeAt(0)) - charSet + key) % 26) + charSet);
      
      return String.fromCharCode(newChar);
    }))

  return encrypted.join('');
}



 /*  const encrypted = arr.map(char =>  
    char.match(/\W/) ? 
      parseInt(char.charCodeAt(0)) :
      (parseInt(char.charCodeAt(0)) + key) 
  ) */


module.exports = caesar;