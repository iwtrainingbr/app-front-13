# app-front-13


### Baixando a aplicação
- `git clone https://github.com/iwtrainingbr/app-front-13`

### Instalando as dependencias
- `cd app-front-13`
- `npm install`
- `npm install -g json-server`

### Subindo o servidor do banco de dados
No diretório da aplicação, crie um novo arquivo chamado `db.json` e copie para ele o conteúdo do arquivo `db.json.dist`

Execute no terminal:
```shell
npx json-server --watch db.json --port 3009
```

### Executando a aplicação
Execute no terminal
```shell
npm start
```

### Instalando o Cypress (testes)
- `npm install cypress`

### Executando o Cypress (testes)
- `npx cypress open`

### Gerando imagens do PWA
- `npx pwa-asset-generator public/img/logo-white.png ./public/assets --darkmode --padding "calc(35vh - 5%) calc(35vw - 10%)" --background "rgb(0, 0, 0)" -i ./public/index.html -m ./public/manifest.json`
