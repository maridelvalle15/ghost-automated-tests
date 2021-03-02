describe('Ghost', function () {

    beforeEach(()=>{
        cy.viewport(1280,800)
        cy.visit('http://localhost:2368/ghost/#/signin')
            cy.get('#ember8').type('j.guataquira@uniandes.edu.co')
            cy.get('#ember10').type('Uniandespili77')
            cy.get('#ember12 > span').click()
            cy.wait(1000)
    })
  
    context('Creación de posts para mostrar en el sitio (Esenario 1 para F02)',function(){

        it('a',function(){
            cy.get('#ember28').click()
            cy.get('.ember-view.gh-btn.gh-btn-green').click()
            cy.get('.koenig-editor__editor-wrapper').click()
            cy.get('.koenig-editor__editor-wrapper').type('prueba 1')

        })
        it('b', function(){
            cy.get('#ember28').click()
            const asdasd = cy.get('.gh-list-row.gh-posts-list-item').first()
            cy.get('.gh-main').scrollTo('top')
            asdasd.click()
            cy.get('.koenig-editor__editor-wrapper').type('Esta es una prueba para publicar un post con un título de 9 caracteres')
            cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').clear().type('prueba es 1')
            cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger > span').click()
            cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()            
            })

        })

    context('Creación de posts para mostrar en el sitio (Esenario 2 para F02)',function(){

        it('a',function(){
            cy.get('#ember28').click()
            cy.get('.ember-view.gh-btn.gh-btn-green').click()
            cy.get('.koenig-editor__editor-wrapper').click()
            cy.get('.koenig-editor__editor-wrapper').type('prueba 2')

        })
        it('b', function(){
            cy.get('#ember28').click()
            const asdasd = cy.get('.gh-list-row.gh-posts-list-item').first()
            cy.get('.gh-main').scrollTo('top')
            asdasd.click()
            cy.get('.koenig-editor__editor-wrapper').type('Esta es la prueba del escenario 2 para la Funcionalidad 1 (Crear un post con un título de 255 caracteres)')
            cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').clear().type('Esta es una prueba para publicar un post con un título de 255 caracteres. When you write tests against a web page, you need to refer to elements within that web page in order to click links and determine whats displayed. However, if you write tests that')
            cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger > span').click()
            cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()            
        })

    })

})