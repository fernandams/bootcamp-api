# Playwright - Dia 2

Este diretório contém os testes automatizados realizados na API [Restful Booker](https://restful-booker.herokuapp.com/apidoc/index.html) usando Playwright.

## 🛠️ Como Rodar os Testes

#### Dependências

- Node.js v21.6.1
- npm 10.2.4

#### Passos para executar

1. Navegue até o diretório `bootcamp-api`.
2. Instale as dependências necessárias executando o comando:
    ```
    npm install
    ```
3. Para abrir o Playwright e executar os testes, utilize o comando:
    ```
    npx playwright test
    ```

## 📚 Estrutura dos Testes

Foram realizados testes nos endpoints de consulta, cadastro e atualização de reservas, incluindo:

- **Consulta de Reservas**
    - Consulta de todas as reservas cadastradas.
    - Consulta de reservas por ID.

- **Cadastro de Reservas**
    - Cadastramento de uma nova reserva.

 - **Autenticação e obtenção de token**
   -  Gera e utiliza um token de autenticação.
- **Atualização de Reservas**
  - Atualização parcial de uma reserva existente.
