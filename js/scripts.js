var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animalUpperCased = animal.toUpperCase();
var textReplace = text.replace('Papugi', animalUpperCased);
var textFirstHalf = textReplace.length / 2;
console.log(textReplace.slice(0, textFirstHalf));