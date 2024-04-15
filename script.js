function firstChar(str) {
  if (str.trim() === "") {
    return "";
  }
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      return str[i];
    }
  }
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
