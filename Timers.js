
//Immediate Class has used

var Immediate = setImmediate(function alfa() {
    console.log("0.>", 12);
})

console.log("1.>", Immediate.hasRef());

console.log("2.>",Immediate.ref());
// Returns timer reference
 
// Printing Immediate.unref method
console.log("3.>",Immediate.unref());
// Returns Immediate reference and
// sets hasRef to false
 
// Printing Immediate.hasRef before unref
console.log("4.>",Immediate.hasRef());
// Returns false
 
// Clears setInterval Immediate
clearImmediate(Immediate);
 
// Prints after clearing Immediate
console.log("5.>",2);