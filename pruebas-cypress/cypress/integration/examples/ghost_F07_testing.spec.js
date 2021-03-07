describe('Ghost', function () {
    const ghost_url = Cypress.env('GHOST_URL')
    const email = Cypress.env('EMAIL')
    const password = Cypress.env('PASSWORD')

    beforeEach(()=>{
        cy.viewport(1280,800)
        cy.visit(ghost_url + '/ghost/#/signin')
        cy.get('.email').type(email)
        cy.get('.password').type(password)
        cy.get('.login').click()
        cy.wait(1000)
    })

    it('Ingresar contraseña actual equivocada (Escenario 1 para F07)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-password-old').click({force: true}).type('1a1a1a1a1a')
        cy.get('#user-password-new').click({force: true}).type('Mari1234**')
        cy.get('#user-new-password-verification').click({force: true}).type('Mari1234**')
        cy.get('.button-change-password').click()
        cy.wait(1000)
        cy.get('.button-change-password > span').first().contains('Retry')
    })

    it('Ingresar verificación de contraseña equivocada (Escenario 2 para F07)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-password-old').click({force: true}).type(password)
        cy.get('#user-password-new').click({force: true}).type('Mari1234**')
        cy.get('#user-new-password-verification').click({force: true}).type('mAri12345*')
        cy.get('.button-change-password').click()
        cy.wait(1000)
        cy.get('.button-change-password > span').first().contains('Retry')
    })

    it('Ingresar verificación de contraseña con campo de contraseña antigua vacio (Escenario 3 para F07)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-password-new').click({force: true}).type('Mari1234**')
        cy.get('#user-new-password-verification').click({force: true}).type('Mari1234**')
        cy.get('.button-change-password').click()
        cy.wait(1000)
        cy.get('.button-change-password > span').first().contains('Retry')
    })

    it('Ingresar contraseña alfanumérica de 10 caracteres (Escenario 4 para F07)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-password-old').click({force: true}).type(password)
        cy.get('#user-password-new').click({force: true}).type('Mari1234**')
        cy.get('#user-new-password-verification').click({force: true}).type('Mari1234**')
        cy.get('.button-change-password').click()
        cy.wait(1000)
        cy.get('.button-change-password > span').first().contains('Saved')

        cy.get('#user-password-old').click({force: true}).type('Mari1234**')
        cy.get('#user-password-new').click({force: true}).type(password)
        cy.get('#user-new-password-verification').click({force: true}).type(password)
        cy.get('.button-change-password').click()
    })

})