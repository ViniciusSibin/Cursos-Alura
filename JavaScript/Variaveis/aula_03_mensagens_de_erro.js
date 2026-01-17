//console.log(variavelInexistente);

/**
 * Erro de referência: variavelInexistente não está definida

MENSAGEM DE RETORNO AO EXECUTAR O CODIGO
    d:\xampp\htdocs\Cursos-Alura\JavaScript\Variaveis\aula_03_mensagens_de_erro.js:1
    console.log(variavelInexistente);
                ^

    ReferenceError: variavelInexistente is not defined
        at Object.<anonymous> (d:\xampp\htdocs\Cursos-Alura\JavaScript\Variaveis\aula_03_mensagens_de_erro.js:1:13)
        at Module._compile (node:internal/modules/cjs/loader:1761:14)
        at Object..js (node:internal/modules/cjs/loader:1893:10)
        at Module.load (node:internal/modules/cjs/loader:1481:32)
        at Module._load (node:internal/modules/cjs/loader:1300:12)
        at TracingChannel.traceSync (node:diagnostics_channel:328:14)
        at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)
        at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
        at node:internal/main/run_main_module:33:47

    Node.js v24.13.0

*/


console.log('Erro de Sintaxe');

/**
 * Erro de sintaxe: falta de fechamento de parênteses
 * 
 * MENSAGEM DE RETORNO AO EXECUTAR O CODIGO
 * d:\xampp\htdocs\Cursos-Alura\JavaScript\Variaveis\aula_03_mensagens_de_erro.js:27
    console.log('Erro de Sintaxe'
            ^^^^^^^^^^^^^^^^^

    SyntaxError: missing ) after argument list
        at wrapSafe (node:internal/modules/cjs/loader:1692:18)
        at Module._compile (node:internal/modules/cjs/loader:1735:20)
        at Object..js (node:internal/modules/cjs/loader:1893:10)
        at Module.load (node:internal/modules/cjs/loader:1481:32)
        at Module._load (node:internal/modules/cjs/loader:1300:12)
        at TracingChannel.traceSync (node:diagnostics_channel:328:14)
        at wrapModuleLoad (node:internal/modules/cjs/loader:245:24)
        at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
        at node:internal/main/run_main_module:33:47

    Node.js v24.13.0
 */