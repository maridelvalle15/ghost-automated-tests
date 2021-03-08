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

    it('Edición de tags para posts del sitio - escenario 1',function(){
        cy.get('a[href*="#/tags/"]').click()
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F09_e1_p1')
        }
        else {
            cy.screenshot('/bitmaps_test/F09_e1_p1')
        }
        cy.get('.gh-tag-list-name').contains('Tag Interna Prueba').click({force: true})
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F09_e1_p2')
        }
        else {
            cy.screenshot('/bitmaps_test/F09_e1_p2')
        }
        cy.get('#tag-name').click({force: true}).type('Editado')
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F09_e1_p3')
        }
        else {
            cy.screenshot('/bitmaps_test/F09_e1_p3')
        }
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F09_e1_p4')
        }
        else {
            cy.screenshot('/bitmaps_test/F09_e1_p4')
        }
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').contains('Saved')
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F09_e1_p5')
        }
        else {
            cy.screenshot('/bitmaps_test/F09_e1_p5')
        }
       
    })

    it('Edición de tags para posts del sitio - escenario 2',function(){
        cy.get('a[href*="#/tags/"]').click()
        cy.get('.gh-tag-list-name').contains('Tag Interna Prueba').click({force: true})
        cy.get('#tag-name').click({force: true}).clear()
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').contains('Retry')
       
    })

    it('Edición de tags para posts del sitio - escenario 3',function(){
        cy.get('a[href*="#/tags/"]').click()
        cy.get('.gh-tag-list-name').contains('Tag Interna Prueba').click({force: true})
        cy.get('#tag-slug').click({force: true}).type('Ed')
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').contains('Saved')
    })

    it('Edición de tags para posts del sitio - escenario 4',function(){
        cy.get('a[href*="#/tags/"]').click()
        cy.get('.gh-tag-list-name').contains('Tag Interna Prueba').click({force: true})
        cy.get('#tag-description').click({force: true}).type('Esta es una descripción para la edición de un tag')
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').contains('Saved')
    })

})