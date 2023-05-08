# Projeto-FullStack-M6-Sanmerson

#Configuração inicial da Api
Primeiro navegue ate a pasta onde esta localizado a Api
Antes de inicia-la é necessário instalar as dependências, que serão utilizadas nos testes. Portanto utilize o comando abaixo para instalar tais dependências:

yarn install

Configure as variáveis de ambiente no seu .env, passando as credenciais corretas para conectar em seu banco local

Não esqueça de aplicar as migrations no seu banco

npm run typeorm migration:run -- -d ./src/data-source

Com isso feito, para rodar sua aplicação, basta utilizar o comando

yarn dev
