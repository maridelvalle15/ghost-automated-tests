describe('Ghost', function () {

    beforeEach(()=>{
        cy.viewport(1280,800)
        cy.visit('http://localhost:2372/ghost/#/signin')
            cy.get('.email').type('marisela.delvalle93@gmail.com')
            cy.get('.password').type('12345678910')
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
        cy.get('#user-password-old').click({force: true}).type('12345678910')
        cy.get('#user-password-new').click({force: true}).type('Mari1234**')
        cy.get('#user-new-password-verification').click({force: true}).type('mAri12345*')
        cy.get('.button-change-password').click()
        cy.wait(1000)
        cy.get('.button-change-password > span').first().contains('Retry')
    })

    it('Ingresar contraseña alfanumérica de 10 caracteres (Escenario 3 para F07)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-password-old').click({force: true}).type('12345678910')
        cy.get('#user-password-new').click({force: true}).type('Mari1234**')
        cy.get('#user-new-password-verification').click({force: true}).type('Mari1234**')
        cy.get('.button-change-password').click()
        cy.wait(1000)
        cy.get('.button-change-password > span').first().contains('Saved')

        cy.get('#user-password-old').click({force: true}).type('Mari1234**')
        cy.get('#user-password-new').click({force: true}).type('12345678910')
        cy.get('#user-new-password-verification').click({force: true}).type('12345678910')
        cy.get('.button-change-password').click()
    })

    it('Ingresar contraseña alfanumérica de 10 caracteres e iniciar sesion nuevamente (Escenario 4 para F07)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-password-old').click({force: true}).type('12345678910')
        cy.get('#user-password-new').click({force: true}).type('Mari1234**')
        cy.get('#user-new-password-verification').click({force: true}).type('Mari1234**')
        cy.get('.button-change-password').click()
        cy.wait(1000)
        cy.get('.button-change-password > span').last().contains('Saved')
        cy.wait(2000)
        cy.get('.gh-notification-close').first().click()

        cy.wait(2000)
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.user-menu-signout').click()
        cy.wait(1000)

        cy.visit('http://localhost:2372/ghost/#/signin')
        cy.get('.email').type('marisela.delvalle93@gmail.com')
        cy.get('.password').type('Mari1234**')
        cy.get('.login').click()
        cy.wait(1000)

        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-password-old').click({force: true}).type('Mari1234**')
        cy.get('#user-password-new').click({force: true}).type('12345678910')
        cy.get('#user-new-password-verification').click({force: true}).type('12345678910')
        cy.get('.button-change-password').click()
    })

})