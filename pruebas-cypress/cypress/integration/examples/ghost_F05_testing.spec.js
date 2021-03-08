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

    it('Eliminación de Posts - escenario 1',function(){
        cy.get('a[href*="#/posts/"]').first().click()
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F05_e1_p1')
        }
        else {
            cy.screenshot('/bitmaps_test/F05_e1_p1')
        }
        cy.get('.gh-content-status-published.nowrap').contains('Published').click({force: true})
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F05_e1_p2')
        }
        else {
            cy.screenshot('/bitmaps_test/F05_e1_p2')
        }
        cy.get('.post-settings').click()
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F05_e1_p3')
        }
        else {
            cy.screenshot('/bitmaps_test/F05_e1_p3')
        }
        cy.get('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F05_e1_p4')
        }
        else {
            cy.screenshot('/bitmaps_test/F05_e1_p4')
        }
        cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').contains('Delete').click()
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F05_e1_p5')
        }
        else {
            cy.screenshot('/bitmaps_test/F05_e1_p5')
        }

    })

    it('Eliminación de Posts - escenario 2',function(){
        cy.get('a[href*="#/posts/"]').first().click()
        cy.get('.gh-content-status-draft').first().click({force: true})
        cy.get('.post-settings').click()
        cy.get('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()
        cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').contains('Delete').click()

    })

})
