describe('Ghost', function () {
    const ghost_url = Cypress.env('GHOST_URL')
    const email = Cypress.env('EMAIL')
    const password = Cypress.env('PASSWORD')
    const ghost_version = Cypress.env('GHOST_VERSION')
    const is_vrt = Cypress.env('VRT')

    beforeEach(()=>{
        cy.viewport(1280,800)
        cy.visit(ghost_url + '/ghost/#/signin')
            cy.get('#ember8').type(email)
            cy.get('#ember10').type(password)
            cy.get('#ember12 > span').click()
            cy.wait(1000)
    })

    it('Eliminación de Posts - escenario 1',function(){
        cy.get('a[href*="#/posts/"]').first().click({force: true})

        cy.get('.gh-content-status-published.nowrap').contains('Published').click({force: true})

        cy.get('.post-settings').click()

        cy.get('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()

        cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').contains('Delete').click()

    })

    it('Eliminación de Posts - escenario 2',function(){
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F05_e1_p1')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F05_e1_p1')
        }
        cy.wait(1000)
        cy.get('a[href*="#/posts/"]').first().click()
        cy.wait(1000)
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F05_e1_p2')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F05_e1_p2')
        }
        cy.wait(1000)
        cy.get('.gh-content-status-draft').first().click({force: true})
        cy.wait(1000)
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F05_e1_p3')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F05_e1_p3')
        }
        cy.wait(1000)
        cy.get('.post-settings').click()
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F05_e1_p4')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F05_e1_p4')
        }
        cy.wait(1000)
        cy.get('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()
        cy.wait(1000)
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F05_e1_p5')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F05_e1_p5')
        }
        cy.wait(1000)
        cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').contains('Delete').click()
        cy.wait(2000)
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F05_e1_p6')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F05_e1_p6')
        }
        cy.wait(1000)
    })

})
