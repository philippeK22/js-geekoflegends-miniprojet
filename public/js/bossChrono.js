import { Personnage } from "./personnage.js";
 export class BossChrono extends Personnage{
    constructor(nom,vie,attaque){
        super(nom,vie,attaque)

        
    }
    
    enigmes(){
        let enigme =["première énigme est ...  qu'/est ce qui est jaune et qui attends?", " deuxième enigme est ... /n Je ne peux pas marcher, j/'ai pourtant un dos et quatre pieds. Qui suis-je ?", " trisième énigme est ... /n Combien de temps peut vivre une souris ?","Je ne fais pas de bruit quand je me réveille mais je réveille tout le monde. qui suis-je ?" ];
        let random = Math.floor(Math.round()* enigme.length);
        let choix = enigme[random];
        let reponse = ["jonathan","une chaise","sa depends des chats","le soleil"];
        if (this.vie <=300) {
            alert(choix);
        }
        let maReponse = prompt("mets ta reponse");
        
        if (random == 0 && maReponse == reponse[0]){
            alert("chrono est mort");

        }
        else if (random == 1 && maReponse == reponse[1]) {
            alert("chrono est mort");
            
        }
        else if (random == 2 && maReponse == reponse[2]) {
            alert("chrono est mort");
            
        }
        else if (random == 3 && maReponse == reponse[3]) {
            alert("chrono est mort");
            
        }
        // else if (random == 4 && maReponse == reponse[4]) {
        //     alert("chrono est mort");
            
        // }

    }

}
            
            


        
        


