class Question {
    constructor(question, answer){
        this.question = question;
        this.answer = answer;
    }
};
let question1 = new Question('qu\'est ce qui est jaune et qui attends?',"jonathan");
let question2 = new Question("Je ne peux pas marcher, j/'ai pourtant un dos et quatre pieds. Qui suis-je ?","une chaise");
let question3 = new Question("Combien de temps peut vivre une souris ?","sa dépends des chats");
let question4 = new Question("Je ne fais pas de bruit quand je me réveille mais je réveille tout le monde. qui suis-je ?"," le soleil");

export let questions =[question1,question2,question3,question4];
