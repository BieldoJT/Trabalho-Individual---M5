# Trabalho-Individual-Modulo-5

O que foi usado e como funciona a aplicação?


- A aplicação utiliza o pacote prompt-sync, que possibilita tornar o input do usuario em uma variavel.


- Possui dois arquivos, o app.js e o propriedadesCSS.js:
    @ No app.js, possui o principal da aplicação. Por meio de um looping, o prompt sempre é chamado para que o usuario digite o que se pede.

    @No propriedadesCSS.js, contem uma lista que é exportada e importada no app.js. Nesta lista contem as propriedades existentes no CSS.(Não contém todas, mas possui um número significante de propriedades.)



- O funcionamento começa com a apresentação do codigo por meio de um console.log, logo em seguida entra num looping feito por meio do WHILE. No looping é chamado o prompt para capturar o input do usuario. Inserido a informação, ele verifica por meio de condicionais se o input é valido ou não, no caso, verifica se o usuario digitou, sair ou a propriedade.

    @ Se a propriedade for válida, aparece um console.log avisando que foi "adicionado com sucesso" e entra novamente no loopoing solicitando um novo input, caso o input validado , ja tenha sido adicionado, aparece outro aviso dizendo que ja foi adicionado.

    @No caso do input digitado não estar na lista de propridades do css, aparece um console dizendo que foi digitado incorretamente ou que foi digitado não é propriedade do css

    @Por fim, se for digitado sair, a aplicação encerra o looping e mostra em ordem alfabética, linha por linha , o que foi inserido pelo usuario.

- Foi utilizado o pacote CHALK para tornar a aplicação visualmente melhor.


