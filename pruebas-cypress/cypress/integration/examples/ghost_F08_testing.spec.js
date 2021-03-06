describe('Ghost', function () {

    beforeEach(()=>{
        cy.viewport(1280,800)
        cy.visit('http://localhost:2368/ghost/#/signin')
            cy.get('#ember8').type('j.guataquira@uniandes.edu.co')
            cy.get('#ember10').type('Uniandespili77')
            cy.get('#ember12 > span').click()
            cy.wait(1000)
    })

    it('Creación de tags para posts del sitio - escenario 1',function(){
        cy.get('a[href*="#/tags/"]').click()
        cy.get('a[href*="#/tags/new/"]').click()
        cy.get('#tag-name').click({force: true}).type('Tag Prueba')
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').contains('Saved')
    })

    it('Creación de tags para posts del sitio - escenario 2',function(){
        cy.get('a[href*="#/tags/"]').click()
        cy.get('a[href*="#/tags/new/"]').click()
        cy.get('#tag-name').click({force: true})
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').contains('Retry')
    })

    it('Creación de tags para posts del sitio - escenario 3',function(){
        cy.get('a[href*="#/tags/"]').click()
        cy.get('button').contains('Internal tags').click()
        cy.get('.ember-view.gh-btn.gh-btn-green.gh-btn-lg').contains('Create a new tag').click()
        cy.get('#tag-name').click({force: true}).type('Tag Interna Prueba')
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').contains('Saved')
    })

    it('Creación de tags para posts del sitio - escenario 4',function(){
        cy.get('a[href*="#/tags/"]').click()
        cy.get('button').contains('Internal tags').click()
        cy.get('.ember-view.gh-btn.gh-btn-green.gh-btn-lg').contains('Create a new tag').click()
        cy.get('#tag-name').click({force: true}).type('Tag Interna Prueba')
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').contains('Saved')
    })
})