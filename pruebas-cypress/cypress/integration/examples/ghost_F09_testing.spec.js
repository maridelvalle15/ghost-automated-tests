describe('Ghost', function () {

    beforeEach(()=>{
        cy.viewport(1280,800)
        cy.visit('http://localhost:2368/ghost/#/signin')
            cy.get('#ember8').type('j.guataquira@uniandes.edu.co')
            cy.get('#ember10').type('Uniandespili77')
            cy.get('#ember12 > span').click()
            cy.wait(1000)
    })

    it('Edición de tags para posts del sitio - escenario 1',function(){
        cy.get('a[href*="#/tags/"]').click()
        cy.get('.gh-tag-list-name').contains('Tag Interna Prueba').click({force: true})
        cy.get('#tag-name').click({force: true}).type('Editado')
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').contains('Saved')
       
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