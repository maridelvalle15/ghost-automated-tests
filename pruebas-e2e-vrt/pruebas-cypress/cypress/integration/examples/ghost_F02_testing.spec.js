describe('Ghost', function () {
    const ghost_url = Cypress.env('GHOST_URL')
    const email = Cypress.env('EMAIL')
    const password = Cypress.env('PASSWORD')
    const ghost_version = Cypress.env('GHOST_VERSION')
    const is_vrt = Cypress.env('VRT')

    beforeEach(()=>{
        cy.viewport(1280,800)
        cy.viewport(1280,800)
        cy.visit(ghost_url + '/ghost/#/signin')
        cy.get('#ember8').type(email)
        cy.get('#ember10').type(password)
        cy.get('#ember12 > span').click()
        cy.wait(1000)
    })

    it('Cierre de sesión exitoso es Ghost (Esenario 1 para F02)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F02_e1_p1')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F02_e1_p1')
        }
        cy.get('a[href*="#/signout/"]').click()
        cy.wait(100)
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F02_e1_p2')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F02_e1_p2')
        }
        //cy.url().should('eq', ghost_url + '/__/#/signin')
        //cy.url().should('eq', 'http://localhost:2369' + '/__/#/signin')
        //if (ghost_version == 'reference'){
        //    cy.screenshot('/bitmaps_reference/F02_e1_p3')
        //}
        //else {
        //    cy.screenshot('/bitmaps_test/F02_e1_p3')
        //}
    })

    it('Cierre de sesión exitoso es Ghost (Esenario 2 para F02)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('a[href*="#/signout/"]').click()
        //cy.go('back')

    })

})