const gameName = new String('pallavi-04-shukla');

console.log(gameName[0]);
console.log(gameName.__proto__);

// Properties of strings
console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 7);
console.log(newString);

const anotherString = gameName.slice(-17, 4);
console.log(anotherString);

const newStr = "     pallavi   ";
console.log(newStr.trim());

const url = "https://pallavi.com/pallavi%92shukla";
console.log(url.replace("%92", '-'));
console.log(url.includes("pallavi"));

console.log(url.split('/'));