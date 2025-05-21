/* 
Exercice : Trouver l'entier le plus proche de N dans un tableau
🧩 Enoncé
Tu reçois : Un tableau d’entiers (positifs et/ou négatifs)
Un nombre N (référence)
👉 Ton but est de trouver l’entier le plus proche de N dans le tableau.
✅ Règles :
Si plusieurs entiers sont à la même distance, tu choisis celui qui est le plus petit (pas le plus grand cette fois-ci !).
Si le tableau est vide, tu retournes "Aucun". 
*/

const tab1 = [7, 12, 5, 3, 9];
const n1 = 10;

// Résultat attendu : 9

const tab2 = [8, 12, 6, 14];
const n2 = 10;

// Résultat attendu : 8

const tab3 = [];
const n3 = 5;
// Résultat attendu : "Aucun"

const closestToN = (N, tab) => {
  if (tab.length === 0) {
    return "Aucun";
  } else {
    let target = tab[0];
    for (let i = 0; i < tab.length; i++) {
      if (Math.abs(N - tab[i]) < Math.abs(N - target)) {
        target = tab[i];
      } else if (Math.abs(N - tab[i]) === Math.abs(N - target)) {
        if (tab[i] < target) {
          target = tab[i];
        }
      }
    }
    return target;
  }
};

console.log(closestToN(n1, tab1));
console.log(closestToN(n2, tab2));
console.log(closestToN(n3, tab3));
