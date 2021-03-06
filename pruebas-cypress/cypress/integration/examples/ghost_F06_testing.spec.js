describe('Ghost', function () {

    beforeEach(()=>{
        cy.viewport(1280,800)
        cy.visit('http://localhost:2369/ghost/#/signin')
            cy.get('.email').type('marisela.delvalle93@gmail.com')
            cy.get('.password').type('12345678910')
            cy.get('.login').click()
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

    it('Edición de correo con formato válido (Escenario 3 para F06)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-email').click({force: true}).clear().type('correovalido1@correo.com')
        cy.get('.gh-btn-blue').click()
        cy.get('.gh-btn-blue > span').first().contains('Saved')

        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-email').click({force: true}).clear().type('marisela.delvalle93@gmail.com')
        cy.get('.gh-btn-blue').click()
        cy.wait(1000)
    })

    it('Edición de correo con formato válido (Escenario 4 para F06)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-email').click({force: true}).clear().type('correovalido2@correo.com')
        cy.get('.gh-btn-blue').click()
        cy.get('.gh-btn-blue > span').first().contains('Saved')
        cy.wait(1000)
        

        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.user-menu-signout').click()
        cy.wait(1000)

        cy.visit('http://localhost:2369/ghost/#/signin')
        cy.get('.email').type('correovalido2@correo.com')
        cy.get('.password').type('12345678910')
        cy.get('.login').click()
        cy.wait(1000)

        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-email').click({force: true}).clear().type('marisela.delvalle93@gmail.com')
        cy.get('.gh-btn-blue').click()
        cy.wait(1000)
    })

})