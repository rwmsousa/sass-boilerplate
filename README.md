# Boilerplate Sass


Este projeto utiliza [Sass](https://sass-guidelin.es/), um pré-processador CSS que permite o uso de variáveis, aninhamento, mixins, herança e outras características interessantes que tornam a escrita CSS mais poderosa e flexível.

O projeto segue a arquitetura 7-1 do Sass, que é uma estrutura para organizar os arquivos Sass em sete pastas e um arquivo principal. Esta estrutura ajuda a manter o código organizado e facilita a manutenção do projeto.

Após a instalação, você terá a opção de visualizar vários componentes em seu navegador e a forma de utilização da arquitetura em uma aplicação frontend com ReactJS e NextJS.

## Objetivo do Projeto

Disponibiliza uma opção de arquitetura com Sass e aplicação prática no NextJS, para desenvolvedores da comunidade. Veja a [Demo](https://sass-boilerplate.vercel.app/).

## Features
- Arquitetura do [NextJS](https://nextjs.org/) estabelecida
- Arquitetura 7-1 [Sass](https://sass-guidelin.es/) estabelecida
- Exemplos de componentes
- Exemplos de estilização global de tags e componentes com Sass
- Configuração do [Eslint](https://eslint.org/)
- Configuração do [Prettier](https://prettier.io/)
- Configuração do [Jest](https://jestjs.io/pt-BR/) e Coverage
- Configuração do [Husky](https://typicode.github.io/husky/)
- Configuração do [Commitlint](https://commitlint.js.org/#/)
- Pipeline pre-commit com Prettier e Eslint
- Pipeline commit-msg com Commitlint
- Pipeline pre-push com build e testes unitários
- CI/CD com workflow no [Github Actions](https://github.com/features/actions) com check linter, check prettier e testes unitários
- Versionamento automatizado [semantic-release](https://semantic-release.gitbook.io/) - a desenvolver

## Pré-requisitos

-   Node.js
-   npm
-   Docker


## Instalação

Clone o repositório para a sua máquina local e instale as dependências:

```bash
git clone git@github.com:rwmsousa/sass-boilerplate.git
cd sass-boilerplate
npm install
```

## Build

Para construir o projeto, execute o seguinte comando:

```bash
make build
```

## Run

```bash
make run
```

Acesse: http://localhost:3000

## Documentação

Para mais informações sobre os diferentes aspectos do projeto, consulte os seguintes READMEs:

[Abstracts](https://github.com/rwmsousa/sass-boilerplate/blob/master/stylesheets/abstracts/README.md)

[Base](https://github.com/rwmsousa/sass-boilerplate/blob/master/stylesheets/base/README.md)

[Components](https://github.com/rwmsousa/sass-boilerplate/blob/master/stylesheets/components/README.md)

[Layout](https://github.com/rwmsousa/sass-boilerplate/blob/master/stylesheets/layout/README.md)

[Pages](https://github.com/rwmsousa/sass-boilerplate/blob/master/stylesheets/pages/README.md)

[Themes](https://github.com/rwmsousa/sass-boilerplate/blob/master/stylesheets/themes/README.md)

[Vendors](https://github.com/rwmsousa/sass-boilerplate/blob/master/stylesheets/vendors/README.md)

## Contribuição

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Contribuições são sempre bem-vindas! Se você tem uma melhoria ou correção, sinta-se à vontade para fazer um fork do repositório e enviar um pull request. Se você tem alguma dúvida ou sugestão, pode abrir uma issue.

## Licença

Copyright (c) 2023 - [Ricardo Sousa](https://github.com/rwmsousa)

É concedida permissão, gratuitamente, a qualquer pessoa que obtenha uma cópia
deste software e dos arquivos de documentação associados (o "Software"), para lidar
no Software sem restrição, incluindo, sem limitação, os direitos
para usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender
cópias do Software, e permitir que as pessoas a quem o Software é
fornecido o façam, sujeito às seguintes condições:

O aviso de copyright acima e este aviso de permissão devem ser incluídos em todas
cópias ou partes substanciais do Software.

O SOFTWARE É FORNECIDO "COMO ESTÁ", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU
IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE COMERCIALIZAÇÃO,
ADEQUAÇÃO A UM PROPÓSITO ESPECÍFICO E NÃO VIOLAÇÃO. EM NENHUMA CIRCUNSTÂNCIA
OS AUTORES OU DETENTORES DOS DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER RECLAMAÇÃO, DANOS OU OUTRA
RESPONSABILIDADE, SEJA EM UMA AÇÃO DE CONTRATO, DELITO OU DE OUTRA FORMA, DECORRENTE DE,
FORA DE OU EM CONEXÃO COM O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO
PROGRAMAS.
