// @ts-check
const { test, expect } = require('@playwright/test');

var tokenRecebido;

test('Atualização parcial', async ({ request }) => {
    // criando o token
    const response = await request.post('/auth', {
        data: {
            "username" : "admin",
            "password" : "password123"
        }
    });

    console.log(await response.json());
    const responseBody = await response.json();

    tokenRecebido = responseBody.token;
    console.log("Seu token é: " + tokenRecebido);

    // Atualizando dados da reserva:
    const parcialUpdateRequest = await request.patch('/booking/912', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${tokenRecebido}`
        },
        data: {
            "firstname": "herbert",
            "lastname": "herbertao",
            "totalprice": 111,
            "depositpaid": false
        }
    });
    console.log(await parcialUpdateRequest.json());
});
