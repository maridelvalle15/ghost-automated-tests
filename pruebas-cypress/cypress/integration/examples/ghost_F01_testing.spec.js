describe('Ghost under monkeys', function() {
    const ghost_url = Cypress.env('GHOST_URL')
    const email = Cypress.env('EMAIL')
    const password = Cypress.env('PASSWORD')

    it('Login fallido en Ghost (Esenario 1 para F01)', function() {
        cy.visit(ghost_url + '/ghost/#/signin');
        cy.wait(1000)
        cy.get('#ember8').type(email)
        cy.get('#ember10').type(password)
        cy.get('#ember12 > span').click()
        cy.wait(1000)
    })

    it('Login exitoso es Ghost (Esenario 2 para F01)', function() {
        cy.visit(ghost_url + '/ghost/#/signin');
        cy.wait(1000);
        cy.get('#ember8').type(email)
        cy.get('#ember10').type(password)
        cy.get('#ember12 > span').click()
        cy.wait(10000)
    })

})