/*
Somme max sans doublons (intermédiaire)
Énoncé :
Écris une fonction qui prend un tableau de nombres et retourne la somme des nombres sans doublons (chaque valeur unique seulement une fois).
*/

const sumUnique = (tab) => {
  const sumTab = {};
  let sum = 0;
  for (let num of tab) {
    sumTab[num] = (sumTab[num] || 0) + 1;
  }

  for (let num in sumTab)
    if (sumTab[num] === 1) {
      sum += parseInt(num);
    }

  return sum;
};

console.log(sumUnique([1, 2, 2, 3, 4, 4, 5]));
console.log(sumUnique([10, 20, 10, 30, 40, 30]));
