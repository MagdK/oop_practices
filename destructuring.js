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
    // console.log(yearFromInternet);
    // console.log(authorFromInternet);
};

// funWithPoemData(poemData);

// Distructuring soran csak olyan neve lehet a letrehozott valtozonak, amilyen kulcsa van az objektumnak. Ha ilyen kulcsa nem lenne, akkor undefined-ot kapnank. 



// OBJECT DESTRUCTURING IN ARRAY
 const arr = ["alma", "banan", "korte", function () {
     console.log("Ciao");
 },"barack"];

 const firstItem = arr[0];
 const secondItem = arr[1];

 const [firstItemX, , secondItemX,...elseX] = arr;

//  console.log(firstItemX === firstItem);
 console.log(elseX); // => kiirja a tobbi valtozoba el nem mentett maradek dolgot ['korte', 'barack']

 console.log(arr[arr.length-1]);

const [,,, ourFun] = arr

ourFun() // => Ciao lesz kiirva, vesszok uran a negyedik elem, feljebb levo sor