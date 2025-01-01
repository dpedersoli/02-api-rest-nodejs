import { expect, test } from 'vitest'

test('O usuário consegue criar uma nova transação', () => {
  // método
  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201) // etapa de validação onde eu pego o valor de "responseStatusCode" e verifico se ele é igual a "201"
}) // o primeiro param eu passo o nome do teste (o "enunciado"); e no segundo param eu passo o método de execução desse teste (a "operação"), que dentro dela eu faço também a "validação"
