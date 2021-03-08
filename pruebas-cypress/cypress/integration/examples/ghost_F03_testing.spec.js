describe('Ghost', function () {
    const ghost_url = Cypress.env('GHOST_URL')
    const email = Cypress.env('EMAIL')
    const password = Cypress.env('PASSWORD')
    const ghost_version = Cypress.env('GHOST_VERSION')

    beforeEach(()=>{
        cy.viewport(1280,800)
        cy.visit(ghost_url + '/ghost/#/signin')
        cy.get('#ember8').type(email)
        cy.get('#ember10').type(password)
        cy.get('#ember12 > span').click()
        cy.wait(1000)
    })

    it('Ajustes en el diseño del blog - escenario 1',function(){
        cy.get('a[href*="#/settings/design/"]').click()
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F03_e1_p1')
        }
        else {
            cy.screenshot('/bitmaps_test/F03_e1_p1')
        }
        cy.get('.gh-blognav-container > .gh-blognav > .gh-blognav-item > .gh-blognav-line > .gh-blognav-label > .gh-input').first().type('Nueva Pestaña',{force: true})
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F03_e1_p2')
        }
        else {
            cy.screenshot('/bitmaps_test/F03_e1_p2')
        }
        cy.get('.gh-blognav-container > .gh-blognav > .gh-blognav-item > .gh-blognav-add').first().click({force: true})
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F03_e1_p3')
        }
        else {
            cy.screenshot('/bitmaps_test/F03_e1_p3')
        }
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn').first().contains('Saved')
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F03_e1_p4')
        }
        else {
            cy.screenshot('/bitmaps_test/F03_e1_p4')
        }

    })

    it('Ajustes en el diseño del blog - escenario 2',function(){
        cy.get('a[href*="#/settings/design/"]').click()
        cy.get('.gh-blognav-container > .gh-blognav > .sortable-objects > .js-draggableObject > .gh-blognav-item > .gh-blognav-delete').first().click({force: true})
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn').first().contains('Saved')
    })

})