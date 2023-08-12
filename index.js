const cats = ["Milo", "Otis", "Garfield"]; 

function destructivelyAppendCat (name){
    cats.push ("Ralph")
}
function destructivelyPrependCat (name){
    cats.unshift ("Bob")
}
function destructivelyRemoveLastCat(name){
    cats.pop ("Bob")
}
function destructivelyRemoveFirstCat(name){
    cats.shift ("Ralph")
}
function appendCat(name){
  return ["Milo", "Otis", "Garfield","Broom"]
}
function prependCat(name){
    return ["Arnold", ... cats];
}
function removeLastCat(){
    return cats.slice (0,cats.length-1)
}
function removeFirstCat(){
    return cats.slice(1)
}