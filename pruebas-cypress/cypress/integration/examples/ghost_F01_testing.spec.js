describe('Ghost under monkeys', function() {
    const ghost_url = Cypress.env('GHOST_URL')
    const email = Cypress.env('EMAIL')
    const password = Cypress.env('PASSWORD')
    const ghost_version = Cypress.env('GHOST_VERSION')
    const is_vrt = Cypress.env('VRT')

    it('Login fallido en Ghost (Esenario 1 para F01)', function() {
        cy.visit(ghost_url + '/ghost/#/signin');
        
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F01_e1_p1')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F01_e1_p1')
        }
        cy.wait(1000)
        cy.get('#ember8').type(email)
        
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F01_e1_p2')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F01_e1_p2')
        }
        cy.get('#ember10').type('1919191')
        
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F01_e1_p3')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F01_e1_p3')
        }
        cy.get('#ember12 > span').click()
        cy.wait(1000)
        
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F01_e1_p4')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F01_e1_p4')
        }
    })

    it('Login exitoso es Ghost (Esenario 2 para F01)', function() {
        cy.visit(ghost_url + '/ghost/#/signin');
        cy.wait(1000);
        cy.get('#ember8').type(email)
        cy.get('#ember10').type(password)
        cy.get('#ember12 > span').click()
        cy.wait(10000)
    })

})