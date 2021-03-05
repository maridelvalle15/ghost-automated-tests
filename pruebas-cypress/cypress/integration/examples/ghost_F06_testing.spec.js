describe('Ghost', function () {

    beforeEach(()=>{
        cy.viewport(1280,800)
        cy.visit('http://localhost:2368/ghost/#/signin')
            cy.get('#ember8').type('marisela.delvalle93@gmail.com')
            cy.get('#ember10').type('12345678910')
            cy.get('#ember12 > span').click()
            cy.wait(1000)
    })

    it('Edición de correo con formato inválido (Escenario 1 para F06)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-email').click({force: true}).clear().type('correo inválido')
        cy.get('.gh-btn-blue').click()
        cy.get('.gh-btn-red > span').first().contains('Retry')
    })

    it('Edición de correo con formato inválido (Escenario 2 para F06)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-email').click({force: true}).clear().type('correoinvalido@correo')
        cy.get('.gh-btn-blue').click()
        cy.get('.gh-btn-red > span').first().contains('Retry')
    })

})