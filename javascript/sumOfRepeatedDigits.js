/*
Exercice : "Somme des chiffres égaux"
Énoncé :
Écris une fonction qui prend un tableau de nombres entiers positifs et retourne la somme des chiffres qui apparaissent plusieurs fois au total dans tous les nombres.


exemple:
const numbers = [123, 456, 789, 145, 551]; 

Tous les chiffres dans tous les nombres :
1,2,3,4,5,6,7,8,9,1,4,5,5,1

Les chiffres qui apparaissent plus d'une fois :
1 (x3), 4 (x2), 5 (x3)

Leur somme : 1 + 4 + 5 = 10 */

const sumOfRepeatedDigits = (tab) => {
  const tabOfNum = [];
  let sum = [];
  for (let i = 0; i < tab.length; i++) {
    const number = tab[i].toString();
    // console.log(number);
    for (let j = 0; j < number.length; j++) {
      //   console.log(number[j]);
      const digit = parseInt(number[j]);
      if (tabOfNum.includes(digit) && !sum.includes(digit)) {
        sum.push(digit);
      }
      tabOfNum.push(digit);
    }
  }
  const results = sum.reduce((total, num) => total + num, 0);
  return results;
};
console.log(sumOfRepeatedDigits([123, 456, 789, 145, 551])); //10
console.log(sumOfRepeatedDigits([10, 23, 45, 67, 89])); // 0
console.log(sumOfRepeatedDigits([111, 1, 11])); // 1
console.log(sumOfRepeatedDigits([101, 202, 303, 404])); // 10
console.log(sumOfRepeatedDigits([])); // 0
console.log(sumOfRepeatedDigits([99999])); // 9
console.log(sumOfRepeatedDigits([1234567890, 9876543210, 1122334455])); //45
