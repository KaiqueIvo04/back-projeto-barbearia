/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor"

//REGISTER Clients
Given("entrar no sistema", () => {
    cy.log("Entrou")
})

When("criar novo Client com os dados fornecidos", () => {
    //Pegar dados gerados do Client para verificação
    this.client = {
        "name": "cliente2",
        "password": "cliente123",
        "email": "clienteteste@barber.com",
        "confirmPassword": "cliente123",
        "userType": "client"
    }
})

Then("o sistema deverá registrar o Client e mostrar uma mensagem de sucesso na operação", () => {
    const client = this.client;

    cy.request({
        method: 'POST',
        url: 'http://localhost:8081/api/v1/auth/register',
        body: client
    }).then(getDataResponse => {
        expect(getDataResponse.body).to.not.be.empty;
        cy  .log(getDataResponse.body)
    })
    // Cypress.Commands.add('getToken', (email, pass) => {

    //     cy.request({
    //         method: 'POST',
    //         url: `http://localhost:8081/v1/auth/`,
    //         body: {
    //             "email": email,
    //             "password": pass
    //         }

    //     }).then(token => {
    //         expect(token.body.access_token).to.not.be.empty;
    //         return token;
    //     })
    // });
    // requestPostClientsStandard.registerOneClient(token).then(getDataResponse => {
    //     assertionsPostClientsStandard.notNull(getDataResponse)
    //     assertionsPostClientsStandard.shouldContainStatus(getDataResponse, 201)
    //     assertionsPostClientsStandard.shouldContainDuration(getDataResponse, 1500)
    //     assertionsPostClientsStandard.shouldContainStatusText(getDataResponse, "Created")
    //     assertionsPostClientsStandard.verifyIdExists(getDataResponse)
    //     assertionsPostClientsStandard.verifyClientEqual(Client, getDataResponse)
    //     assertionsPostClientsStandard.verifyTimeStampsExists(getDataResponse)
    // })
})