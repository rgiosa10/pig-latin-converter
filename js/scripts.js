const vowelArray = ["a","e","i","o","u"];

function convertToArrayAndCheck(text) {
  let textArray = text.split(" ");
  console.log(textArray);
  for (let i = 0; i < textArray.length; i += 1) {
    firstLetter = textArray[i].charAt(0);
    if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
      vowelWord = textArray[i] + "way";
      textArray[i] = vowelWord;
      console.log(vowelWord);
    } else {
      consonantWord = textArray[i];
      textArray[i] = consonantChange(consonantWord);
    }
  }
  return textArray;
}

function consonantChange(consonantWord) {
  // let letterArray = consonantWord.split("");
  if (consonantWord.charAt(0) === "q" && consonantWord.charAt(1) === "u") {
    let preFix =  consonantWord.slice(0, 2);
    let remainder = consonantWord.slice(2,consonantWord.length)
    pigLatinWord = remainder + preFix + "ay";
  } else if (consonantWord.charAt(1) === "q" && consonantWord.charAt(2) === "u") {
    let preFix =  consonantWord.slice(0, 3);
    let remainder = consonantWord.slice(3, consonantWord.length)
    pigLatinWord = remainder + preFix + "ay";
  } else if (consonantWord.charAt(1) === "q" && consonantWord.charAt(2) === "u") {
    pigLatinWord = consonantWord + preFix + "ay";
  }
  return pigLatinWord;
}


// UI Logic

window.addEventListener("load", function() {
  let form = document.getElementById("text-input");
  let result = document.getElementById("results");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = form.querySelector("input#text-input1").value;
    
    textArray = convertToArrayAndCheck(text).toString().replaceAll(",", " ");
    result.append(textArray);
  });
});