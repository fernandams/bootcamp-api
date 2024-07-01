# Cypress - Dia 1

Este diretório contém os testes automatizados realizados na API [Restful API](https://restful-api.dev/) usando Cypress.

## 🛠️ Como Rodar os Testes

#### Dependências

- Node.js v21.6.1
- npm 10.2.4

#### Passos para executar

1. Navegue até o diretório `bootcamp-api`.
2. Instale as dependências necessárias executando o comando:
    ```sh
    npm install
    ```
3. Para abrir o Cypress e executar os testes, utilize o comando:
    ```sh
    npx cypress open
    ```

## 📚 Estrutura dos Testes

Foram realizados testes nos endpoints de busca e cadastro de dispositivos.

- **Buscar Dispositivos**
    - Testa a busca de um dispositivo específico pelo seu ID e valida os detalhes retornados.

- **Cadastrar Dispositivo**
    - Verifica se é possível cadastrar um novo dispositivo com sucesso e valida os detalhes retornados.
