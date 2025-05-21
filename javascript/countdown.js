// Écrire une fonction qui affiche dans la console les nombres de 100 à 1, dans l’ordre décroissant.
const countdown = (start, end) => {
  if (start < end) return;
  for (let i = start; i >= end; i--) {
    console.log(i);
  }
};
countdown(100, 1);
