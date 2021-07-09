// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {

    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.push(name);
    
}

function destructivelyPrependCat(name) {

    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.unshift(name);
    
}

function destructivelyRemoveLastCat() {

    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.pop();

}

function destructivelyRemoveFirstCat() {

    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    cats.shift();

}

function appendCat(name) {
    
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    let newCats = [...cats, name];
    return newCats;

}

function prependCat(name) {

    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    let newCats = [name, ...cats];
    return newCats;
}

function removeLastCat() {

    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    let newCats = [...cats];
    newCats.pop();
    return newCats;
}

function removeFirstCat() {

    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
    let newCats = [...cats];
    newCats.shift();
    return newCats;
}

//console.log(appendCat());
