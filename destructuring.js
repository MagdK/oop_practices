const poemData = {
    yearFromInternet: 1962,
    authorFromInternet: "Weores Sandor",
    titleFromInternet: "Enhasadas",
    textFromInternet: `Utca sarkok varok ram, 
    fel oraja is van tan, 
    am ertelmem felragyog, 
    nem jovok mert itt vagyok`
};

// console.log(poemData.yearFromInternet);

const pdafi = poemData.authorFromInternet;
const pdyfi = poemData.yearFromInternet;

// console.log(pdafi);
// console.log(pdyfi);

// const {yearFromInternet, authorFromInternet} = poemData;

// console.log(yearFromInternet);
// console.log(authorFromInternet);

function funWithPoemData({yearFromInternet, authorFromInternet}) {
    console.log(yearFromInternet);
    console.log(authorFromInternet);
};

funWithPoemData(poemData);

// Distructuring soran csak olyan neve lehet a letrehozott valtozonak, amilyen kulcsa van az objektumnak. Ha ilyen kulcsa nem lenne, akkor undefined-ot kapnank. 