// Écrire une fonction qui prend un mot (ou une phrase simple) et qui retourne true si c’est un palindrome (le mot se lit pareil à l’envers) ou false sinon. Dans votre exercice, vous pourrez passer n'importe quelle chaîne de caractères, accentuée ou non, avec de la ponctuation ou non.

const word1 = "radar";
const word2 = "bonjour";
const word3 = "ordinateur";
const word4 = "chaise";

const str1 =
  "Et si l'arôme des bottes révèle madame, le verset t'obsède, moraliste !";
const str2 = "La mariée ira mal !";
const str3 = "Le chat dort sur le canapé";
const str4 = "Il fait beau aujourd'hui";

// fontion de conversiteur accent en non-accent et minuscule/maj

const convertChar = (char) => {
  const noAccents = "AAAAAaaaaaaEEEEeeeeIIIIiiiiOOOOOOooooooUUUUuuuuYyyNnCc";
  const accents = "ÀÁÂÃÄÅàáâãäåÈÉÊËèéêëÌÍÎÏìíîïÒÓÔÕÖØòóôõöøÙÚÛÜùúûüÝýÿÑñÇç";
  const alphabet = "abcdefghijklmopqrstuvwxyz";
  const index = accents.indexOf(char);
  //si index > -1 alors char non accentué
  if (index > -1) {
    return noAccents[index];
    //si le char en minuscule est présent dans l'alphabet alors on le redonne en minuscule
  } else if (alphabet.indexOf(char.toLowerCase()) > -1) {
    return char.toLowerCase();
    // sinon c'est un caractère spéciaux donc on retour rien
  } else {
    return "";
  }
};

const isAPalindrome = (str) => {
  let newStr = "";
  let palStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    palStr += convertChar(str[i]);
    // console.log(palStr);
  }
  for (let i = 0; i < str.length; i++) {
    newStr += convertChar(str[i]);
    // console.log(newStr);
  }
  if (newStr === palStr) {
    return true;
  } else {
    return false;
  }
};

console.log(isAPalindrome(word1));
console.log(isAPalindrome(word2));
console.log(isAPalindrome(word3));
console.log(isAPalindrome(word4));

console.log(isAPalindrome(str1));
console.log(isAPalindrome(str2));
console.log(isAPalindrome(str3));
console.log(isAPalindrome(str4));
