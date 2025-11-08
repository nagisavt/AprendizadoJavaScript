var globalVar = "Eu sou uma varaivel global";
let globalLet = "Eu tambem sou global, mas com escopo de let";
const globalConst = "Ja eu sou uma contante global";

{
    var blockVar = "Eu sou uma var com escopo de bloco";
    let blockLet = "Eu sou um let com escopo de bloco";
    const blockConst = "Ja eu sou uma contante de bloco";
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "Sou uma var com escopo de bloco";
    let functionLet = "Sou um let com escopo de bloco";
    const functionConst = "Sou um const com escopo de bloco";
    }
    show();
    
    console.log(functionVar); // Lança ReferenceError
    console.log(functionLet); // Lança ReferenceError
    console.log(functionConst); // Lança ReferenceError