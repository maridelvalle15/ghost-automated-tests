describe('Ghost', function () {

    beforeEach(()=>{
        cy.viewport(1280,800)
        cy.visit('http://localhost:2368/ghost/#/signin')
            cy.get('#ember8').type('j.guataquira@uniandes.edu.co')
            cy.get('#ember10').type('Uniandespili77')
            cy.get('#ember12 > span').click()
            cy.wait(1000)
    })

    it('Eliminación de Posts - escenario 1',function(){
        cy.get('#ember28').click()
        cy.get('.gh-content-status-published.nowrap').contains('Published').click({force: true})
        cy.get('.post-settings').click()
        cy.get('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()
        cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').contains('Delete').click()

    })

    it('Eliminación de Posts - escenario 2',function(){
        cy.get('#ember28').click()
        cy.get('.gh-content-status-draft.gh-badge.gh-badge-purple.nowrap').contains('Draft').click({force: true})
        cy.get('.post-settings').click()
        cy.get('.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button').click()
        cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').contains('Delete').click()

    })

})
