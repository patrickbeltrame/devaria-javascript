const listaMarcas = ["volks", "ford"];
const marca = process.argv[2];

if(marca === "volks") {
    console.log("if -Marca Volks atendida")
} else if (marca === "ford") {
    console.log("if - marca ford atendida")
} else {
    console.log("if - marca não atendida")
}

switch(marca) {
    case "volks":
        console.log("switch - volks atendido");
        break;
        case "ford":
            console.log("switch - ford atendida");
        default:
            console.log("switch - marca não atendida")
}