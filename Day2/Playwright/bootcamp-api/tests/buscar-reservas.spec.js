// @ts-check
const { test, expect } = require('@playwright/test');

test('Consultando as reservas cadastradas', async ({ request }) => {

    // Fazendo uma requisição GET para a API para obter os detalhes da reserva
    const response = await request.get('/booking');
    console.log(await response.json());
    // Verificando se a resposta da API foi bem-sucedida
    expect(response.ok()).toBeTruthy();
    // Verificando se o status da resposta é 200 (OK)
    expect(response.status()).toBe(200);
});

test('Consultando as reservas cadastradas por id', async ({ request }) => {

    // Fazendo uma requisição GET para a API para obter os detalhes da reserva
    const response = await request.get('/booking/282');
    
    // transforma a resposta em json
    const jsonBody = await response.json();
    console.log(jsonBody);

    // Verificando se os dados da reserva estão corretos
    expect(jsonBody.firstname).toBe('Jim');
    expect(jsonBody.lastname).toBe('Brown');
    expect(jsonBody.totalprice).toBe(111);
});
