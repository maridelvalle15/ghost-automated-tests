describe('Ghost', function () {
    const ghost_url = Cypress.env('GHOST_URL')
    const email = Cypress.env('EMAIL')
    const password = Cypress.env('PASSWORD')

    beforeEach(()=>{
        cy.viewport(1280,800)
        cy.visit(ghost_url + '/ghost/#/signin')
        cy.get('#ember8').type(email)
        cy.get('#ember10').type(password)
        cy.get('#ember12 > span').click()
        cy.wait(1000)
    })

    it('Ajustes en el diseño del blog - escenario 1',function(){
        cy.get('#ember41').click()
        cy.get('.gh-blognav-container > .gh-blognav > .gh-blognav-item > .gh-blognav-line > .gh-blognav-label > .gh-input').first().type('Nueva Pestaña',{force: true})
        cy.get('.gh-blognav-container > .gh-blognav > .gh-blognav-item > .gh-blognav-add').first().click({force: true})
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').contains('Saved')

    })

    it('Ajustes en el diseño del blog - escenario 2',function(){
        cy.get('#ember41').click()
        cy.get('.gh-blognav-container > .gh-blognav > .sortable-objects > .js-draggableObject > .gh-blognav-item > .gh-blognav-delete').first().click({force: true})
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').contains('Saved')
    })

})