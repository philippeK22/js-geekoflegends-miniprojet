import { questions } from "./enigmes.js";

export class Boss {
    constructor(nom, ptVie, ptAttaque){
        this.nom = nom;
        this.ptVie = ptVie;
        this.ptAttaque = ptAttaque;
        this.attack = function(cible){
            cible.ptVie -= this.ptAttaque;
            alert(`${this.nom} attaque ${cible.nom} pour ${this.ptAttaque} points de dégats. ${cible.nom} n'a plus que ${cible.ptVie} points de vie.`);
            if(cible.ptVie <= 0){
                alert(`${cible.nom} est mort.`);
            }
        }
        this.specialAttack = function(){
            if(this.ptVie <= 20){ 
                let numRand = Math.round(Math.random() * (questions.length - 1));
                let playerAnswer;
                let i = 1;
                while(playerAnswer != questions[numRand].answer && i <= 3){
                    playerAnswer = prompt(questions[numRand].question);
                    if (playerAnswer == questions[numRand].answer){
                        this.ptVie = 0;
                        alert("Félicitations, vous avez vaincu " + this.nom + ".");
                        break;
                    } else if(i < 3){
                        i++;
                        continue;
                    }
                    alert("Vous avez été vaincu par " + this.nom + ".");
                    i++;
                }
            }
        }
    }
}

