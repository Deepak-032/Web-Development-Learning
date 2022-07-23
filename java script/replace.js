const str = "abc's test#s900//";
console.log(str.replace(/[^a-zA-Z0-9 ]/g, ""));
or
console.log(str.replace(/[^\w\s]/g, ""));

// \w looks for all word characters in a string. 
// A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character.
// \s(lowercase) which is for whitespace characters.
