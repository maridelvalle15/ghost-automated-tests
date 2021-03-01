describe('Ghost under monkeys', function() {

    it('Login fallido en Ghost (Esenario 1 para F01)', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.wait(1000)
        cy.get('#ember8').type('jguataquira@uniandes.edu.co')
        cy.get('#ember10').type('Uniandespili77')
        cy.get('#ember12 > span').click()
        cy.wait(1000)
    })

    it('Login exitoso es Ghost (Esenario 2 para F01)', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.wait(1000);
        cy.get('#ember8').type('j.guataquira@uniandes.edu.co')
        cy.get('#ember10').type('Uniandespili77')
        cy.get('#ember12 > span').click()
        cy.wait(10000)
    })

})