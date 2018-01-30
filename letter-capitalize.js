function LetterCapitalize(str) {
  var words = str.split(" ");
  for(var i = 0; i < words.length; i++) {
      var newWord = words[i].charAt(0).toUpperCase();
      for(var j = 1; j < words[i].length; j++) {
          newWord += words[i].charAt(j);
      }
      words[i] = newWord;
  }
  var sentence = words.join(" ");
  return sentence;
}