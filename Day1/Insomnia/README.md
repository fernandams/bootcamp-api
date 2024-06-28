# Insomnia - Dia 1

Este diretório contém a coleção de testes realizados na API [Restful API](https://restful-api.dev/) usando Insomnia.

## 🛠️ Como Importar a Coleção

1. Abra o Insomnia.
2. Acesse a opção de "Import".
3. Selecione o arquivo `Insomnia_Collection.json` deste diretório.

## 📚 Descrição dos Testes

Foram realizados testes básicos nos seguintes endpoints:

### **GET: Buscar Dispositivos**
- **Dispositivo Específico**: Recupera um dispositivo pelo ID.
- **URL Inexistente**: Testa a resposta da API para uma URL inválida.
- **Dispositivo Recém Cadastrado**: Verifica a recuperação de um dispositivo recém-cadastrado.

### **POST: Cadastrar Dispositivos**
- **Cadastro Válido**: Adiciona um novo dispositivo com dados válidos.
- **Ano Negativo**: Tenta cadastrar um dispositivo com ano negativo para testar a validação.