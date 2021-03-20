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

    it('crear post en Ghost (Esenario 2 para F01)', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.wait(1000);
        cy.get('#ember8').type('j.guataquira@uniandes.edu.co')
        cy.get('#ember10').type('Uniandespili77')
        cy.get('#ember12 > span').click()
        cy.wait(10000)
        cy.get('#ember28').click()
        cy.wait(10000)
        cy.get('#ember93').click()
        cy.wait(1000)
    })


    it('Cierre de sesión exitoso es Ghost (Esenario 1 para F02)', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.wait(1000);
        cy.get('#ember8').type('j.guataquira@uniandes.edu.co')
        cy.get('#ember10').type('Uniandespili77')
        cy.get('#ember12 > span').click()
        cy.wait(1000)
        cy.get('.w3').click()
        cy.wait(1000)

    })



})