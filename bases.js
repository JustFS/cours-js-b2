// variables
var maVieilleVariable = "Coucou";

// const = valeur immuable
const prenom = "Julien";

// let = peuvent évoluer au fil du code
let cours = "oijo ihf ozieh tfoipeh sfpoie sgoi ceefg";

cours = "hello";

//////////////////////////////////

function faireQuelqueChose() {
  console.log("Je fais un truc");
}
// appeler une fonction
faireQuelqueChose();

// fonction flêchée
const faireUnTruc = (tache) => {
  console.log("Je fais : " + tache);
};
faireUnTruc("la vaisselle");
faireUnTruc("les courses");
