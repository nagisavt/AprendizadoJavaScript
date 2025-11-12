let userRole = "admin";
let acessLevel;
let isLoggeIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;

if (userRole == "admin"){
    acessLevel = "Acesso total";
} else if (userRole == "manager"){
    acessLevel = "Acesso limitado"
} else {
    acessLevel = "Nenhum acesso garantido"
}

if(isLoggeIn){
    if(userRole == "admin"){
        userMessage = "Bem Vindo ADM";
    } else {
        userMessage = "Bem Vindo User";
    }
} else {
    userMessage = "Por favor log para acessar o sistema";
}

switch(userType){
    case "admin":
        userCategory = "Administrador";
        break;
    case "manager":
        userCategory = "Gerente";
        break;
    case "subscriber":
        userCategory = "Inscrito";
        break;
    default:
        userCategory = "Desconhecido";

}

let isAuthenticationStatus = isAuthenticated ? "Autenticado" : "Nao autenticado";

console.log("Authentication Status:", isAuthenticationStatus)
console.log("User Category", userCategory);
console.log("Access Level:", acessLevel);
console.log("User Message:", userMessage);