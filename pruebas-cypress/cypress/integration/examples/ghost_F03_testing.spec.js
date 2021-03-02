describe('Ghost', function () {

    beforeEach(()=>{
        cy.viewport(1280,800)
        cy.visit('http://localhost:2368/ghost/#/signin')
            cy.get('#ember8').type('j.guataquira@uniandes.edu.co')
            cy.get('#ember10').type('Uniandespili77')
            cy.get('#ember12 > span').click()
            cy.wait(1000)
    })

    it('Ajustes en el diseño del blog - escenario 1',function(){
        cy.get('#ember41').click()
        cy.get('#ember94').type('Nueva Pestaña',{force: true})
        cy.get('#ember92 > .gh-blognav-add').click({force: true})
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').contains('Saved')

    })

    it('Ajustes en el diseño del blog - escenario 2',function(){
        cy.get('#ember41').click()
        cy.get('#ember93 > .gh-blognav-delete > svg').click({force: true})
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').contains('Saved')
    })

})