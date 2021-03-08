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
  
    context('Creación de posts para mostrar en el sitio (Esenario 1 para F02)',function(){

        it('b', function(){
            cy.get('a[href*="#/posts/"]').first().click({force: true})
            if (is_vrt && ghost_version == 'reference'){
                cy.screenshot('/bitmaps_reference/F04_e1_p1')
            }
            else if (is_vrt && ghost_version == 'test') {
                cy.screenshot('/bitmaps_test/F04_e1_p1')
            }
            const asdasd = cy.get('.gh-list-row.gh-posts-list-item').first()
            if (is_vrt && ghost_version == 'reference'){
                cy.screenshot('/bitmaps_reference/F04_e1_p2')
            }
            else if (is_vrt && ghost_version == 'test') {
                cy.screenshot('/bitmaps_test/F04_e1_p2')
            }
            cy.get('.gh-main').scrollTo('top', {'ensureScrollable': false})
            asdasd.click()
            if (is_vrt && ghost_version == 'reference'){
                cy.screenshot('/bitmaps_reference/F04_e1_p3')
            }
            else if (is_vrt && ghost_version == 'test') {
                cy.screenshot('/bitmaps_test/F04_e1_p3')
            }
            cy.get('.koenig-editor__editor-wrapper').type('Esta es una prueba para publicar un post con un título de 9 caracteres')
            if (is_vrt && ghost_version == 'reference'){
                cy.screenshot('/bitmaps_reference/F04_e1_p4')
            }
            else if (is_vrt && ghost_version == 'test') {
                cy.screenshot('/bitmaps_test/F04_e1_p4')
            }
            cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').clear().type('prueba es 1')
            if (is_vrt && ghost_version == 'reference'){
                cy.screenshot('/bitmaps_reference/F04_e1_p5')
            }
            else if (is_vrt && ghost_version == 'test') {
                cy.screenshot('/bitmaps_test/F04_e1_p5')
            }
            cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger > span').click()
            if (is_vrt && ghost_version == 'reference'){
                cy.screenshot('/bitmaps_reference/F04_e1_p6')
            }
            else if (is_vrt && ghost_version == 'test') {
                cy.screenshot('/bitmaps_test/F04_e1_p6')
            }
            cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
            if (is_vrt && ghost_version == 'reference'){
                cy.screenshot('/bitmaps_reference/F04_e1_p7')
            }
            else if (is_vrt && ghost_version == 'test') {
                cy.screenshot('/bitmaps_test/F04_e1_p7')
            }            
            })

        })

    context('Creación de posts para mostrar en el sitio (Esenario 2 para F02)',function(){

        it('b', function(){
            cy.get('a[href*="#/posts/"]').first().click({force: true})
            const asdasd = cy.get('.gh-list-row.gh-posts-list-item').first()
            cy.get('.gh-main').scrollTo('top', {'ensureScrollable': false})
            asdasd.click()
            cy.get('.koenig-editor__editor-wrapper').type('Esta es la prueba del escenario 2 para la Funcionalidad 1 (Crear un post con un título de 255 caracteres)')
            cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').clear().type('Esta es una prueba para publicar un post con un título de 255 caracteres. When you write tests against a web page, you need to refer to elements within that web page in order to click links and determine whats displayed. However, if you write tests that')
            cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger > span').click()
            cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()            
        })

    })

})