class Poem {
    constructor (yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet) {
        this.year = yearFromInternet
        this.author = authorFromInternet
        this.title = titleFromInternet
        this.text = textFromInternet
    }
};

const favPoem = new Poem (1962, "Weöres Sándor", 
"Énhasadás", 
"Utcasarkon várok rám, félórája is van tán. Ám értelmem fölragyog Nem jövök, mert itt vagyok.");

console.log(favPoem);