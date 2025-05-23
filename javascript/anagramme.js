/* 
Anagrammes simples (niveau facile/intermédiaire)
Énoncé :
Écris une fonction qui prend deux chaînes de caractères et retourne true si elles sont des anagrammes (c’est-à-dire qu’elles contiennent les mêmes lettres, peu importe l’ordre), sinon false.
*/

const areAnagrams = (word1, word2) => {
  if (word1.length !== word2.length) {
    return false;
  }
  const letterCount = (word) => {
    const count = {};
    for (let i = 0; i < word.length; i++) {
      count[word[i]] = (count[word[i]] || 0) + 1;
    }
    return count;
  };

  const word1Count = letterCount(word1);
  const word2Count = letterCount(word2);

  console.log({ word1Count, word2Count });

  for (let char in word1Count) {
    console.log(char, word1Count[char], word2Count[char]);
    if (word1Count[char] !== word2Count[char]) {
      return false;
    }
  }

  return true;
};

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));
console.log(areAnagrams("abc", "cba"));
console.log(areAnagrams("lien", "ligne"));
console.log(areAnagrams("aabb", "abbb"));
