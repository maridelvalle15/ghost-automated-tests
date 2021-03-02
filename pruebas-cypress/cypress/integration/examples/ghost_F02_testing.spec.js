describe('Ghost', function () {

    beforeEach(()=>{
        cy.viewport(1280,800)
        cy.visit('http://localhost:2368/ghost/#/signin')
            cy.get('#ember8').type('j.guataquira@uniandes.edu.co')
            cy.get('#ember10').type('Uniandespili77')
            cy.get('#ember12 > span').click()
            cy.wait(1000)
    })

    it('Cierre de sesión exitoso es Ghost (Esenario 1 para F02)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Sign Out').click()
        cy.url().should('eq', 'http://localhost:2368/__/#/signin')
    })

    it('Cierre de sesión exitoso es Ghost (Esenario 2 para F02)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Sign Out').click()
        cy.go('back')
        //cy.wait(1000)
        //cy.url().should('eq', 'http://localhost:2368/__/#/signin')
        //cy.visit('http://localhost:2368/ghost/#/editor/post').to.equal('http://localhost:2368/__/#/signin')

    })

})