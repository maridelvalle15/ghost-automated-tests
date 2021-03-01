describe('Ghost under monkeys', function() {

    beforeEach(()=>{
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.wait(1000)
        cy.get('#ember8').type('j.guataquira@uniandes.edu.co')
        cy.get('#ember10').type('Uniandespili77')
        cy.get('#ember12 > span').click()
        cy.wait(1000)
    })

    it('crear post en Ghost (Esenario 2 para F01)', function() {
        cy.get('#ember28').click()
        cy.wait(100)
        //cy.get('a[href*="#/editor/post/"]').click({ multiple: true })
        cy.get('.ember-view.gh-btn.gh-btn-green').click()
        cy.wait(100)
        cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').click().type('Probando ja ja ja ja')
        cy.wait(1000)
        cy.get('.koenig-editor__editor-wrapper').click().type('jo jo jo jo')
        cy.wait(1000)
        cy.get('.hg-publishmenu').click()
        //cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger').click()
        //cy.wait(300)
        //cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('Probando ja ja ja ja')
        //cy.wait(100)
        //cy.get('.koenig-editor__editor-wrapper').type('jo jo jo jo')
        //cy.wait(100)
        //cy.get('#ember23').click()
        //cy.wait(10000)
        //cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()

    })


})