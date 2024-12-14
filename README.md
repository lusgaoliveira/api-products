# Lolja

## Descrição

Nesse repositório há três pastas contendo um sistema básico de compras de produtos, sendo a api(backend), o frontend web e mobile. A aplicação é simples e contém três entidades sendo elas: clients, products e purchases. De forma que essas entidades possuem funcionalidades como:

- Client: cadastrar, inativar, atualizar, buscar todos e por id.
- Product: cadastrar, inativar, atualizar, buscar todos e por id.
- Purchase: cadastrar, cancelar uma compra, buscar todas e por id.

## 📁 Estrutura do Backend

```
/backend
    /controllers  -> Responsável por gerenciar a interação entre o frontend e backend
    /repositories -> Responsável pela interação com o banco de dados
    /routes       -> Pasta com a definição das rotas das três entidades
    /services     -> Responsável por regras de negócio
    /config       -> Pasta contendo o schema do banco de dados e arquivo db.js para realizar a conexão
    /models       -> Contém a estrutura padrão das entidades do banco
    /validators   -> Responsável por validar os dados das entidades

```

## 📁 Estrutura do Mobile

```
/mobile
    /assets         -> Arquivos estáticos (imagens, ícones, fontes)
    /components     -> Componentes reutilizáveis
    /navigation     -> Configuração de navegação (React Navigation)
    /screens        -> Telas do aplicativo (ex.: Home, UpdateClient)
    /App.tsx        -> Arquivo principal do app
    /package.json   -> Dependências do projeto
    tsconfig.json   -> Configurações do TypeScript
```
## 📁 Estrutura da Web

```
/app
    /clientes       -> Responsável por exibir informações e cadastrar clientes com foco na utilização do usuário
    /componentes    -> Responsável pela criação de componentes para reutilização nas páginas
    /compras        -> Responsável pela exibição e cadastro de compras
    /fonts          -> Responsável pela fontes do sistemas Web (Arquivo WOFF)
    /produtos       -> Responsável pela exibição e cadastro de produtos
    favicon         -> Ícone padrão do next.js
    globals         -> Configuração global de estilização
    layout          -> Configuração de layout
    page            -> Página inicial (Home)

## 🚀 Tecnologias Utilizadas

### Backend

- Node js
- Express
- PostgreSQL
- Nodemon
- Zod
- Docker
- Dotenv

### Mobile

- React Native
- Expo
- React Navigation

### Web

- Next.js
- Tailwind CSS
- Axios
- SWR

## ✍ Utilização da API

Para rodar o projeto em sua máquina, siga as etapas abaixo:

1. Clone o repositório:
```
https://github.com/lusgaoliveira/lolja.git
```

2. Entre na pasta do projeto e logo em seguida o backend:
```
cd lolja
cd backend
```

3. Instale as dependências:
```
npm install
```

4. Configure as variáveis de ambiente (crie um arquivo .env dentro da pasta backend):
```
DB_HOST=localhost
DB_PORT=3216
DB_USER=user-products
DB_PASSWORD=2000
DB_NAME=db-products
```

5. Execute o comando abaixo para subir o banco de dados postgres, conectar no mesmo e criar todo o schema:
```
docker-compose up
```

6. Inicie o servidor:
```
npm start
```

## ✍ Utilização do Mobile

Para rodar o aplicativo em sua máquina, siga as etapas abaixo:

1. Clone o repositório:
```
https://github.com/lusgaoliveira/lolja.git
```

2. Entre na pasta do projeto e logo em seguida o backend:
```
cd lolja
cd mobile
```

3. Instale as dependências:
```
npm install
```

4. Inicie o Expo:
```
npx expo start
```

5. Abra o aplicativo e/ou:
    - Escaneie o QR Code exibido no terminal ou na interface do Expo usando o app Expo Go no seu dispositivo.
    - Alternativamente, execute o app em um emulador configurado.


## ✍ Utilização da Web

Para rodar o projeto em sua máquina, siga as etapas abaixo:

1. Clone o repositório:
```
https://github.com/lusgaoliveira/lolja.git
```

2. Entre na pasta do projeto e logo em seguida o frontend-lolja:
```
cd lolja
cd frontend-lolja
```

3. Instale as dependências:
```
npm install

4. Com o backend iniciado, inicie o servidor do frontend:
```
npm run dev
```

## Licença
Este projeto está licenciado sob a Licença MIT.