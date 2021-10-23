import { Personnage } from "./personnage.js";

import {Mage} from "./mage.js";
import {Archer} from "./archer.js";
import {Guerrier} from "./guerrier.js";
let magicien = new Mage("magicien",100,150,0);
let zelda = new Archer("zelda",120,100);
let gladiator =new Guerrier("gladiator",200,50,0);
let TroisHero = [zelda.nom,gladiator.nom,magicien.nom];
let heroRandom = TroisHero[Math.floor(Math.random()* TroisHero.length)];

 export class BossSauron extends Personnage{
    constructor(nom,vie,attaque){
        super(nom,vie,attaque)

    }
    attaqueHero(){
        console.log(`${this.nom} attaque ${heroRandom} et lui fais perdre - ${this.attaque} points de vie`);
    }
    enigmes(){
        
            let enigme = ["première énigme est ... \n qu'est ce qui est jaune et qui attends?"," deuxième enigme est ... \n Je ne peux pas marcher, j'ai pourtant un dos et quatre pieds. Qui suis-je ?"," troisième énigme est ... \n Combien de temps peut vivre une souris ?"," la quatrième enigme est .. \n Je ne fais pas de bruit quand je me réveille mais je réveille tout le monde. qui suis je ?" ];
            let random = Math.floor(Math.random()* enigme.length);
            let choix = enigme[random];
            let reponse = ["jonathan","une chaise","sa depends des chats","le soleil"];
            if (this.vie <= 250) {
                alert(choix);
            }
            let maReponse = prompt("mets ta reponse");
            if (random == 0 && maReponse == reponse[0]){
                alert("chrono est mort");
    
            }
            else if (random == 1 && maReponse == reponse[1]) {
                alert("sauron est mort")
                
            }
            else if (random == 2 && maReponse == reponse[2]) {
                alert(" sauron est mort")
                
            }
            else if (random == 3 && maReponse == reponse[3]) {
                alert("sauron est mort")
                
            }
            else{
                alert(" tu es aussi mort");
            }
           
        }
    
    };
