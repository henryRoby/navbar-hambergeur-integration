let nom = 'razanabelahy';
console.log(nom);
let nomTableau = nom.split('')
console.log(nomTableau);

let compteur = 0;

for (let i = 0; i < nomTableau.length; i++) {
  if (nomTableau[i] == "a") {
    compteur++
  }
  console.log(compteur);
}

let newChaine = nomTableau.join("")
console.log(newChaine.replace("r", "z"));
console.log(newChaine.slice(0, 3));




let prenom = "henry"
let age = 20

console.log(`nom :${nom} prenom:${prenom} age :${age}`);

let html = `
<h2>${nom}</h2>
<h2>${prenom}</h2>
<span>${age}</span>
`
console.log(html);


// let arr = ["rouge", "orange", "jaune"];
// console.log(arr.concat(['vert',['bleu','marron']]));
// let sousTableau = arr[3];
// console.log(sousTableau);

const random = Math.random()
console.log(Math.round(random));

let noms = ['riz', 'banane', 'carotte', 'tomate'];

// for(let i = 0; i<noms.length; i++){
//   console.log( noms[i]);
// }


// let i = 0
// while (i<noms.length) {
//   console.log(noms[i])
//   i++
// }


let i = 0;

do {
  console.log(i, noms[i])
  i++
} while (i < noms.length);


let jour = 7;

switch (jour) {
  case 1:
    console.log("lundi");
    break;
  case 2:
    console.log("mardi");
    break;
  case 3:
    console.log("mercredi");
    break;
  case 4:
    console.log("jeudi");
    break;
  case 5:
    console.log("vendredi");
    break;
  default:
    console.log("week-end");
    break
}


const testFonction = function (a, b) {
  const somme = a + b
  return somme
}

const resultat = testFonction(2, 8)

console.log(resultat);

const maFOnction = (nom, resultat) => console.log(`bonjour ${nom} et ${resultat}`)
maFOnction('Eddy', 'masospory')




let myFonction = (test1, test2) => {
  let maVariable = "hello test fonction callBack";
  test1(maVariable)
}



myFonction((test2) => {
  let valeur = test2.split('')
  console.log(valeur);

  let nouveauValeur = valeur.join('')
  console.log(nouveauValeur);

});


//// 
let legumes = ['riz', 'banane', 'carotte', 'tomate'];

const listLegumes = (items, index) => console.log(index, items);

legumes.forEach(listLegumes)



//////QUERYSELECTOR
const paragraphe = document.querySelector("body > p:nth-child(2)")

console.log(paragraphe)

const para = document.getElementsByClassName('test')
console.log(para);

const titre = document.querySelector('h1')

// console.log(titre.innerText);

// titre.innerText += " changeo am'zay ary e !"

// const parag = document.querySelectorAll('p')

// parag.forEach(para=>console.log(para.innerText+=" test mandeh tsara ve!"))



const contenuDiv = document.querySelector('.contenu')
console.log(contenuDiv);

let listNom = ['riz', 'banane', 'carotte'];

// noms.forEach(nom=>console.log(nom))

// if (listNom.length<4) {
//   contenuDiv.innerHTML = 'Contenu insiffusant'
// }else{
//   noms.forEach(nom=>contenuDiv.innerHTML +=`<p>${nom}</p>`)
// }


// listNom.length<2?
// contenuDiv.innerHTML = 'Contenu insiffusant':
// listNom.forEach(nom=>contenuDiv.innerHTML +=`<p>${nom}</p>`)


const test1 = document.querySelector('.test1')

listNom.forEach((items) => {
  // { test1.innerHTML += `<h3>${items}</h3>` }
})


// const getAttrubite = document.querySelector('a')
// console.log(getAttrubite.getAttribute("href"));

// getAttrubite.setAttribute('href',"http://www.facebook.com/")
// console.log(getAttrubite);
// getAttrubite.innerText ="visiter facebook"

// getAttrubite.setAttribute('style','color:red')
// getAttrubite.setAttribute('style','list-style:none')


// const test =()=>{
//   console.log("vous avez cliquez sur le boutton !")
//   const boutton = document.querySelector('button')  
//   boutton.style.color = "white"
//   boutton.style.backgroundColor="blue"
//   // boutton.style.marginLeft = "50%"
//   boutton.style.width = "400px"
//   boutton.style.height = "400px"
// }

// const h1 = document.querySelector('h1')
// h1.style.color = "green"

const classList = document.querySelector('p')
// console.log(classList.classList);

// classList.classList.add('error')
// console.log(classList)

// Methode map
let map = new Map()

map.set('nom', 'Henry')
map.set('age', 30)

map.forEach((index, element) => { console.log(element, index) });


const oparationAritmetique = (x, y) => {
  return [
    `${x} x ${y} = ${x * y}`,
    `${x} + ${y} = ${x + y}`,
    `${x} - ${y} = ${x - y}`,
    `${x} / ${y} = ${x / y}`,
    `${x} % ${y} = ${x % y}`
  ]
}

const [multiplication, addition, soustraction, division, modulo] = oparationAritmetique(2, 5)
//console.log(modulo)


///// creer un objet avec javascript

// let personne1 = {
//   nom1:"razanabelahy",
//   prenom1:"Henry",
//   age1:30,
//   adresse:{
//     pay:'Madagascar',
//     ville : 'Antananarivo',
//     fokontany: 'Ampahibe',
//     lot:" xxxxxx"
//   }
// }

// const { nom1, prenom1, age1, adresse:{pay,ville,fokontany,lot}} = personne1

// //console.log(nom1,prenom1,age1, pay, ville,fokontany,lot);

// let personne2 = {...personne1, prenom1:'Fabrice'}

// console.log(personne2);

// const AffichagePersonne =({nom1, prenom1, age1, adresse:{pay,ville,fokontany,lot}})=> {
//   // const {nom1, prenom1, age1, adresse:{pay,ville,fokontany,lot}} = props
//   console.log(`${nom1} ${prenom1}, il a ${age1} ans avec 
// son l'adress suivant: ${pay} ville:${ville}, fokontany:${fokontany}`);
// }
// AffichagePersonne(personne1)
// AffichagePersonne(personne2)


let email = "razanabelahyhenri@gmail.com";
// console.log(email.search('@'));



let personne3 = {
  nom1: "razanabelahy",
  prenom1: "Henry",
  age1: 30,
  email1: 'razanabelahyhenry@gmail.com',
  adresse: {
    pay: 'Madagascar',
    ville: 'Antananarivo',
    fokontany: 'Ampahibe',
    lot: " xxxxxx"
  }
  ,
  login() {
    console.log(`${this.email1} est connectée`);
  },
  logout() {
    console.log(`${this.email1} est déconnectée`);
  }
}



// const utilisateurFoctoryFonction = (nom, email, ...amis) => {
//   return {
//     nom,email,amis,
//     login(){
//       console.log(`${this.email} est déconnectée`);
//     },
//     logout(){
//       console.log(`${this.email} est connectée`);
//     }
//   }
// }

// const utilisatera1 = utilisateurFoctoryFonction('razana', 'razana@gmail.com','Stiven')
// const utilisatera2 = utilisateurFoctoryFonction('razana', 'razana@gmail.com','Stiven','Robera')
// const utilisatera3 = utilisateurFoctoryFonction('razana', 'razana@gmail.com','Stiven','Robera','Rafara')

// console.log(utilisatera1.amis ='test');
// console.log(utilisatera2);
// console.log(utilisatera3);


// notion d'abstraction
function Employer(nom,age,sex,salaire){
  this.nom = nom
  this.age = age
  this.sex = sex
  this.salaire=salaire
  // detail 
  const location = 1000
  const jirama = 5000
  this.depense = function(){
    // console.log(`Salaire final est :${salaire+location+jirama}`);
  }
  this.infoEmployer = function(){
    console.log(`Nom : ${this.nom}`)
    console.log(`Age : ${this.age}`)
    console.log(`Sex : ${this.sex}`)
    console.log(`Salaire : ${this.salaire}`)
    // this.depense()
  }
}

const employ1 = new Employer("Eddy",25,'Masculin',50000)
const employ2 = new Employer("Mustapha",27,'Masculin',7000)


employ1.infoEmployer()
employ2.infoEmployer()


///// une classe 

class Utilisateur {
  //Construicteur : C'est une fonction qui implemente les proprietés d'un object
  constructor(noms, email, ...amis){
      this.noms = noms;
      this.email = email;
      this.amis = amis;
  }
  login(){
      console.log(`${this.email} est connecté(e)`);
  }
  logout(){
      console.log(`${this.email} est déconnecté(e)`);
  }
}

//Heritage des proprietés et des fonctions
class Admin extends Utilisateur {
  //methode accessible uniquement aux admins
  supprimerUtilisateurs(util){
      utilisateurs = utilisateurs.filter(utilisateur => {
          return utilisateur.email != util.email;
      });
  }
}

const util1 = new Utilisateur('Musole Louis', 'musole@gmail.com', 'Charle');7
const util2 = new Utilisateur('Blaise Toin',  'blaise@gmail.com', 'Gloria', 'Juice');
const admin = new Admin('Chance Key', 'chance@gmail.com', 'Jonathan', 'Moise');

let utilisateurs = [util1, util2, admin];
// console.log(utilisateurs);

admin.supprimerUtilisateurs(util1);
// console.log(utilisateurs);


///// notion de polymorphisme

class User {
  constructor(nom) {
  this.nom = nom
  }
  login(){
    console.log(`${this.nom} est connectée entant qu'utilisateur`);
  }
}

User.prototype.login =()=>{
  console.log(`${this.nom} est connectée entant qu'utilisateur`);
}


class Admin1 extends User{
  login(){
    console.log(`${this.nom} est connectée entant qu'Admin`);
  }
}



const user1 = new User('Henry')
const admin1 = new Admin1('Eddy')

user1.login()
admin1.login()
console.log(user1);



//// SCRIPT MENU HAMBERGEUR

// function toggler() {
//   const icon = document.querySelector("#toggler");
//   const menu = document.querySelector(".menu");

//   if (icon.innerHTML=='menu') {
//     icon.innerHTML='close';
//     // menu.style.display = 'block';
//   }else{
//     icon.innerHTML='menu';
//     // menu.style.display = 'none'; 
//   }
// }



