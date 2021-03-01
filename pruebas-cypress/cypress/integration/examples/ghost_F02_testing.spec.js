describe('Ghost under monkeys', function() {

    beforeEach(()=>{
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.wait(1000)
        cy.get('#ember8').type('j.guataquira@uniandes.edu.co')
        cy.get('#ember10').type('Uniandespili77')
        cy.get('#ember12 > span').click()
        cy.wait(10000)
    })

    it('Cierre de sesión exitoso es Ghost (Esenario 1 para F02)', function() {
        cy.get('.w3').click().select('#ember63')
        cy.wait(1000)

    })

})