import {attaquants} from "../main.js";

export class Personnage{
    constructor(nom, ptVie, ptAttaque){
        this.nom = nom;
        this.maxLife = ptVie;
        this.maxAttack = ptAttaque;
        this.ptVie = ptVie;
        this.ptAttaque = ptAttaque;
        this.attackMode = function(){
            this.ptAttaque = Math.round(this.maxAttack * 1.4);
            this.ptVie = Math.round(this.maxLife * 0.75);
            alert(`${this.nom} se met en posture de combat, ses points d'attaques sont désormais à ${this.ptAttaque} et ses points de vie sont à ${this.ptVie}.`); 
        }
        this.defenseMode = function(){
            attaquants.push(this);
            this.ptAttack = Math.round(this.maxAttack * 0.5);
            this.ptLife = Math.round(this.maxLife * 2.5);
            alert(`${this.nom} se met en posture de défense, ses points d'attaques sont désormais à ${this.ptAttaque} et ses points de vie sont à ${this.ptVie}.`);   
        }
        this.hit = function (cible){
            cible.ptVie -= this.ptAttaque;
            alert(`${this.nom} attaque ${cible.nom} pour ${this.ptAttaque} points de dégats. ${cible.nom} n'a plus que ${cible.ptVie} points de vie.`);
            cible.specialAttack();
        }
        this.pass = function(){
            alert(`${this.nom} n'a pas assez de ressource et passe son tour.`);
        }
        this.attack = function(cible){
            if (this.ptVie > 0){
                let choice;
                while (choice != "attaque" && choice != "defense"){
                    choice = prompt(`${this.nom}, choisissez le mode "attaque" ou "defense".`);
                    if (choice == "attaque"){
                        this.attackMode();
                    } else if (choice == "defense"){
                        this.defenseMode();
                    }
                }
            if(this.ptRage >= 0){ 
                if(this.ptRage > 4){
                    this.ptRage = 0; 
                } else if (this.ptRage = 4){
                    this.ptAttaque = this.ptAttaque * 1.25;
                    this.ptRage++;
                } else if (this.ptRage < 4){
                    this.ptRage++;
                } 
                this.hit(cible);
            } else if (this.ptMana){ 
                if (this.ptMana > 2){
                    this.ptMana -= 2;
                    this.hit(cible);
                } else {
                    this.ptMana += 7;
                    this.pass()
                }
            } else if (this.ptArrow){ 
                if (this.ptArrow > 2){
                    this.ptArrow -= 2;
                    this.hit(cible);
                } else {
                    this.ptArrow += 6;
                    this.pass()
                }
            }
          }
        }
    }
}

