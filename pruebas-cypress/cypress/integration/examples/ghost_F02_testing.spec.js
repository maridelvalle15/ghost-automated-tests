describe('Ghost', function () {
    const ghost_url = Cypress.env('GHOST_URL')
    const email = Cypress.env('EMAIL')
    const password = Cypress.env('PASSWORD')
    const ghost_version = 'reference'

    beforeEach(()=>{
        cy.viewport(1280,800)
        cy.visit(ghost_url + '/ghost/#/signin')
        cy.get('#ember8').type(email)
        cy.get('#ember10').type(password)
        cy.get('#ember12 > span').click()
        cy.wait(1000)
    })

    it('Cierre de sesión exitoso es Ghost (Esenario 1 para F02)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F02_e1_p1')
        }
        else {
            cy.screenshot('/bitmaps_test/F02_e1_p1')
        }
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Sign Out').click()
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F02_e1_p2')
        }
        else {
            cy.screenshot('/bitmaps_test/F02_e1_p2')
        }
        cy.url().should('eq', ghost_url + '/__/#/signin')
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F02_e1_p3')
        }
        else {
            cy.screenshot('/bitmaps_test/F02_e1_p3')
        }
    })

    it('Cierre de sesión exitoso es Ghost (Esenario 2 para F02)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Sign Out').click()
        cy.go('back')

    })

})