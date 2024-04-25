# Community Feed / Blog de Posts

Este é um aplicativo de blog simples desenvolvido em React, que exibe posts com informações sobre autores, conteúdo e data de publicação.

## Estrutura do Projeto

O projeto consiste em vários arquivos e diretórios:

- `App.js`: Este arquivo contém o componente principal do aplicativo, que renderiza o cabeçalho, a barra lateral e a lista de posts.
- `global.css`: Arquivo de estilo global para o aplicativo.
- `App.module.css`: Arquivo de módulo CSS para estilização específica do componente `App`.
- `components/Post.js`: Componente responsável por exibir um único post.
- `components/Header.js`: Componente para o cabeçalho do aplicativo.
- `components/Sidebar.js`: Componente para a barra lateral do aplicativo.

## Funcionalidades

- O aplicativo exibe uma lista de posts, onde cada post contém informações sobre o autor, conteúdo e data de publicação.
- Os dados dos posts são fornecidos por um array chamado `posts`, que contém objetos com informações sobre cada post, como autor, conteúdo e data de publicação.
- Para cada post, é renderizado um componente `Post`, que recebe as informações do autor, conteúdo e data de publicação como props.

## Dados dos Posts

Os dados dos posts são fornecidos pelo array `posts`, que contém objetos com as seguintes informações:

- `id`: Identificador único do post.
- `author`: Objeto contendo informações sobre o autor, incluindo `avatarUrl`, `name` e `role`.
- `content`: Array de objetos representando o conteúdo do post. Cada objeto possui um `type` indicando o tipo de conteúdo (por exemplo, "paragraph" para parágrafos ou "link" para links) e `content` com o texto ou URL.
- `publishedAt`: Data de publicação do post.

## Uso do Aplicativo

Para usar este projeto em seu ambiente de desenvolvimento:

1. Clone este repositório em sua máquina local.
2. Instale as dependências usando `npm install` ou `yarn install`.
3. Inicie o servidor de desenvolvimento com `npm run dev`.
4. O aplicativo estará disponível em seu navegador no endereço `http://localhost:5173/`.

## Tecnologias Utilizadas

- React
- JavaScript
- CSS

## Autor

Este projeto foi desenvolvido por Igor Trombini.
