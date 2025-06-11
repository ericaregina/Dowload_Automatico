# Download Automnatico CLI

## Descrição

Aplicação de linha de comando desenvolvida em Node.js para automatizar o download de pacotes de software essenciais, como Adobe e Office. Através de um menu interativo no terminal, o usuário pode escolher qual pacote deseja baixar, tornando o processo mais rápido, confiável e livre de erros manuais.

## Funcionalidades

- Menu interativo no terminal para selecionar quais pacotes baixar:
  - Baixar o pacote do Adobe
  - Baixar o pacote do Office
  - Baixar ambos os pacotes
  - Sair da aplicação
- Download automático dos pacotes selecionados via links configuráveis.
- Feedback informativo no terminal durante o processo.
- Loop para permitir múltiplas execuções até que o usuário escolha sair.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) – Ambiente de execução JavaScript no servidor.
- [Inquirer](https://www.npmjs.com/package/inquirer) – Biblioteca para criar prompts interativos no terminal.
- [Axios](https://www.npmjs.com/package/axios) – Cliente HTTP para realizar downloads.
- Módulos nativos do Node.js: `fs` para manipulação de arquivos e `path` para manipulação de caminhos.

## Instalação

1. Clonar o repositório ou copiar os arquivos para sua máquina local.
2. Navegar até o diretório do projeto no terminal.
3. Instalar as dependências:

```
npm install
