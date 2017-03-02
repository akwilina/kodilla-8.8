var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var textReplace = text.replace('Papugi', animal.toUpperCase());
var firstHalfLength = textReplace.length / 2;
console.log(textReplace.slice(0, firstHalfLength));