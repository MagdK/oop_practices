// oop - object-oriented programmin - ez van a repo nevben
//létrehozzuk a függvényt
//példányosítás folyamata

// parameter legyen egyenlo a key-jel az objektumunkban
function Poem({yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet}) {
    this.year = yearFromInternet
    this.author = authorFromInternet
    this.title = titleFromInternet
    this.text = textFromInternet
    this.makePage = function () {
        console.log(
            `
            Title: ${this.title}

            ${this.body}

            Author: ${this.author}
            ${this.year}
        `);
    }
};

const poemData = {
    yearFromInternet: 1962,
    authorFromInternet: "Weores Sandor",
    titleFromInternet: "Enhasadas",
    textFromInternet: `Utca sarkok varok ram, 
    fel oraja is van tan, 
    am ertelmem felragyog, 
    nem jovok mert itt vagyok`
};

//hogyan tudunk egy object constructorhoz uj kulcsot hozzaadni? Prototype
Poem.prototype.lang = "Hungarian"
const favouritPoemOfAndras = new Poem(poemData);

// igy adunk hozza uj kulcs-ertek part
// favouritPoemOfAndras.favouritedBy = "Andras Ranki";

// .author-ral erjuk el az irot. Mer tigy van elmentve a this altal
// console.log(favouritPoemOfAndras.author);

// console.log(favouritPoemOfAndras.favouritedBy);
console.log(favouritPoemOfAndras.lang);
console.log(favouritPoemOfAndras.__proto__);
console.log(Poem.prototype);

console.log(favPoem.makePage());