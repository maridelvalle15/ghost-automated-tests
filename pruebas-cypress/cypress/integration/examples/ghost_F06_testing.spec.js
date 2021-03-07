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

    it('Edición de correo con formato inválido (Escenario 1 para F06)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-email').click({force: true}).clear().type('correo inválido')
        cy.get('.gh-btn-blue').click()
        cy.get('.gh-btn-red > span').first().contains('Retry')
        cy.screenshot()
    })

    it('Edición de correo con formato inválido (Escenario 2 para F06)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-email').click({force: true}).clear().type('correoinvalido@correo')
        cy.get('.gh-btn-blue').click()
        cy.get('.gh-btn-red > span').first().contains('Retry')
        cy.screenshot()
    })

    it('Edición de correo con formato válido (Escenario 3 para F06)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-email').click({force: true}).clear().type('correovalido1@correo.com')
        cy.get('.gh-btn-blue').click()
        cy.get('.gh-btn-red > span').first().contains('Retry').should('not.exist')
        cy.wait(1000)
        cy.get('#user-email').click({force: true}).clear().type(email)
        cy.get('.gh-btn-blue').click()
        cy.wait(1000)
        cy.screenshot()
    })

    // it('Edición de correo con formato válido (Escenario 4 para F06)', function() {
    //     const ghost_url = Cypress.env('GHOST_URL');

    //     cy.get('.w3.mr1.fill-darkgrey').click()
    //     cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
    //     cy.get('#user-email').click({force: true}).clear().type('correovalido2@correo.com')
    //     cy.get('.gh-btn-blue').click()
    //     cy.get('.gh-btn-red > span').first().contains('Retry').should('not.exist')
    //     cy.wait(1000)
        

    //     cy.get('.w3.mr1.fill-darkgrey').click()
    //     cy.get('.user-menu-signout').click()
    //     cy.wait(1000)

    //     cy.visit(ghost_url + '/ghost/#/signin')
    //     cy.get('.email').type('correovalido2@correo.com')
    //     cy.get('.password').type(password)
    //     cy.get('.login').click()
    //     cy.wait(1000)

    //     cy.get('.w3.mr1.fill-darkgrey').click()
    //     cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
    //     cy.get('#user-email').click({force: true}).clear().type(email)
    //     cy.get('.gh-btn-blue').click()
    //     cy.wait(1000)
    //     cy.screenshot()
    // })

})