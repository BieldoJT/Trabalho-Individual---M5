import PromptSync from "prompt-sync";
import chalk from "chalk";
import listaValidacaoPopriedades from "./propriedadesCSS.js";

const blue = chalk.blue
const red = chalk.red
const green = chalk.green.underline
const yellow = chalk.yellow
const purple = chalk.magenta
const cyan = chalk.cyan
const resposta = chalk.underline.whiteBright
const prompt = PromptSync()


const listaPropriedades = []
const looping = false
const inserir = (lista,item)=>{
    lista.push(item)
    return console.log(green("adicionado com sucesso"))
}

console.log(blue("\n\tBem vindo ao seu organzador de propriedades do CSS \n\tInsira a propiedada que seja valida ou então digite 'sair' para terminar a aplicação!"))

while(!looping){
    let inputPropriedade = prompt(yellow("Digite a propriedade CSS ou digite ")+ purple("SAIR: ")).toLowerCase().trim()
    
    if(inputPropriedade == "sair"){
        break
    }
    if(listaValidacaoPopriedades.includes(inputPropriedade)){
        if(listaPropriedades.includes(inputPropriedade)){
            console.log(purple.underline("Propriedade já adicionada a lista"))
        }else{
            inserir(listaPropriedades,inputPropriedade)
        }
        
    }
    else{
        console.log(red("Propriedade digitada incorretamente / Propriedade não existe"))
        continue
    }

}
listaPropriedades.sort()
console.log(cyan("Segue abaixo a lista propriedades ordenadas em ordem alfabetica:\n"))
for (var i in listaPropriedades){
    console.log(resposta(listaPropriedades[i]))
}



