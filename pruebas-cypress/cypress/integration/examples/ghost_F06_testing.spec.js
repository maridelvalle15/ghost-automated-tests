describe('Ghost', function () {
    const ghost_url = Cypress.env('GHOST_URL')
    const email = Cypress.env('EMAIL')
    const password = Cypress.env('PASSWORD')
    const ghost_version = Cypress.env('GHOST_VERSION')
    const is_vrt = Cypress.env('VRT')

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
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F06_e1_p1')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F06_e1_p1')
        }
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F06_e1_p2')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F06_e1_p2')
        }
        cy.get('#user-email').click({force: true}).clear().type('correo inválido')
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F06_e1_p3')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F06_e1_p3')
        }
        cy.get('.gh-btn-blue').click()
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F06_e1_p4')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F06_e1_p4')
        }
        cy.get('.gh-btn-red > span').first().contains('Retry')
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F06_e1_p5')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F06_e1_p5')
        }
    })

    it('Edición de correo con formato inválido (Escenario 2 para F06)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-email').click({force: true}).clear().type('correoinvalido@correo')
        cy.get('.gh-btn-blue').click()
        cy.get('.gh-btn-red > span').first().contains('Retry')
    })

    it('Edición de correo con campo vacio (Escenario 3 para F06)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-email').click({force: true}).clear()
        cy.get('.gh-btn-blue').click()
        cy.get('.gh-btn-red > span').first().contains('Retry')
    })

    it('Edición de correo con formato válido (Escenario 4 para F06)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-email').click({force: true}).clear().type('correovalido1@correo.com')
        cy.get('.gh-btn-blue').click()
        cy.get('.gh-btn-red > span').first().contains('Retry').should('not.exist')
        cy.wait(1000)
        cy.get('#user-email').click({force: true}).clear().type(email)
        cy.get('.gh-btn-blue').click()
        cy.wait(1000)
    })

})