class Person{
    
    constructor( name, age, job,){
        this.name = name;
        this.age = age;
        this.job = job;
    
    }
    exercise(){
    console.log(`Running is Fun`);
}
fetchJob(){
    console.log(`${this.name} is a ${this.job}`);
}
}
class Programmer extends Person{
    constructor(name, age, job, languages){
    super(name, age, job);
    this.languages = [languages];
    this.busy = true;
}
completeTask(){
    if(this.completeTask.busy){
        this.busy = true;
        console.log(`${this.name} would love to take on a new responsibility!`)
    }else
    console.log(`${this.name} cannot accept any new tasks right now."`)
}
learnLanguages(language){
    this.languages.push(language);
    console.log(`${this.name} has learned a new language, ${language}`);
}
    listLanguage(){
        console.log(`${this.name} knows ${this.languages.toString()}.`);
    }
}

const Matt = new Programmer ("Matt", 18, "Photographer", "English");
const Noelle = new Programmer ("Noelle", 18, "Developer", "English");

Matt.exercise();
Matt.fetchJob();
Matt.completeTask();
Matt.learnLanguages("French");
Matt.listLanguage();

console.log(``);


