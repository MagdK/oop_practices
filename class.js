class Poem {
    constructor (yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet) {
        this.year = yearFromInternet;
        this.author = authorFromInternet;
        this.title = titleFromInternet;
        this.text = textFromInternet;
    }
    makePage() {
        console.log(
            `
            Title: ${this.title}
    
            ${this.body}
    
            Author: ${this.author}
            ${this.year}
        `);
    }
};



const favPoem = new Poem (1962, "Weöres Sándor", 
"Énhasadás", 
"Utcasarkon várok rám, félórája is van tán. Ám értelmem fölragyog Nem jövök, mert itt vagyok.");

// console.log(favPoem.year);

favPoem.makePage();

class ForeignPoem extends Poem {
    constructor (yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet, translator) {
        super(yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet)
        this.translator = translator
    }
    makePage() {
        console.log(
            `
            Title: ${this.title}
    
            ${this.body}
    
            Author: ${this.author}
            Translator: ${this.translator}
            ${this.year}
        `);
    }
};

const weoresPoem = new ForeignPoem(1962, "Weöres Sándor", 
"Énhasadás", 
"Utcasarkon várok rám, félórája is van tán. Ám értelmem fölragyog Nem jövök, mert itt vagyok.", "Alan Dickson")


weoresPoem.makePage();


/*
 NOTES
React-ben class component: extends

EXTENDS - errol fogunk beszelni


Classoknal ki tudjunk bizonyos dolgokat egesziteni valamivel. Lehetnek tulajdonsagok es metodusok is. 

Mindket fajlban csinalunk valtoztatasokat. Elsosorban, ami fontos, hogy tudunk csinalni ugyanugy, ahogy object consttructornal, sajat metodusokat is tudunk hasznalni. 

!!! Method: object that contains a function

class- ban egy uj this nem lehet arrow function, csak hagyomanyos function -- kesobb megtudjuk miert
*/