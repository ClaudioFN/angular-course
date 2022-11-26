# angular-course
Curso Coursera Front-End JavaScript Frameworks: Angular - Desenvolvimento e Testes

 **Semana 1**
- Instalação GIT e Node
- Configuração do ambiente
- Comandos GIT
- Projeto de teste Angular

 **Semana 2**
- Data binding
- Angular services
- Injeção de depedência 
- Angular Routing
- Home, Footer, Header pages component
- Single Page Application

 **Semana 3**
- Angular Template-Driven Forms
- Dialogs
- Forms Validations
- Angular Reative Forms
- Reative Forms Validations
- Angular and Promise
- Angular and RxJS

 **Semana 4**
- Client-Server Communication
- Angular and HTTP
- Error Handling
- Angular and REST
- Animation and Directives
- Testing Angular Applications
- Webpack


---------------------------------------
Principais comandos usados durante o curso:

`npm init`: iniciar o NPM na pasta designada.

`npm install lite-server --save-dev`: instalar os pacotes Node, lite-server e estruturar para uso em servidor os arquivos do projeto. Modo desenvolvimento.

`npm start`: inicia o servidor local.

`npm install -g @angular/cli@6.2.1`: instalar o Angular em versão específica

`ng new conFusion --style=scss`: instalar os pacotes e arquivos para o projeto Angular modo servidor

`npm install @angular/material@6.4.7 --save`: instalar o Angular Material Module (AMM)

`npm install @angular/cdk@6.4.7 --save`: instalar módulo auxialiar para o AMM

`npm install @angular/animations@6.1.10 --save`: instalar animações

`npm install hammerjs@2.0.8 --save`: usado pelo Angular para dar suporte para alguns gestos

`npm install --save @angular/flex-layout@6.0.0-beta.18`: mais pacotes

<span style="color:blue">`npm install --save-dev  --unsafe-perm node-sass`: libera o comando (ng serve)</span>

`ng generate component menu`: criar as opções de menu para um novo componente(componente MENU)

`ng generate service services/dish`: cria um novo serviço dentro de pasta específicada

`npm install font-awesome@4.7.0 --save`: importar o pacote Fonte Awesome para o projeto

`ng g component header`: componente para lidar com o Header da página

`ng g component footer`: componente para lidar com o Footer da página

`ng g component home`: componente para lidar com o Home da página

`ng g component about`: componente para lidar com o About da página

`ng g component contact`: componente para lidar com o Contact da página

`ng g module app-routing`: novo modulo de controle de transição entre páginas

`ng generate service services/promotion`: criar novo serviço para Promoções

`ng g component login` -> novo componente para fazer Login 

`npm install json-server -g`: instalar o módulo do JSON SERVER

`json-server --watch db.json -d 2000`: iniciar o server com tempo de resposta de 2s (2000)

`ng g service services/ProcessHTTPMsg`: criar o serviço para lidar com erros HTTP

`ng g directive directives/highlight`: comando para criar uma Directive em uma pasta específica


-- Testes

`ng test`: inicia o teste

-- Deploy

`ng build --prod`: Iniciar geração de arquivos completos da aplicação (pasta de distribuição da aplicação)
