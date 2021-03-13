const faker = require('faker');

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

    var i, 
    dataPool = [];
    for (i = 1; i <= 5; i++) {
        dataPool.push( {
            'label' : faker.lorem.words(),
            'url' : faker.lorem.word()  
        });
    };
    dataPool.forEach(function(data, i) {
        // 5 dataPool
        it(`Ajustes en el diseño del blog - escenario 1 - ${i+1}`,function(){
            cy.get('a[href*="#/settings/design/"]').click()
            cy.wait(1000)
            if (is_vrt && ghost_version == 'reference'){
                cy.screenshot('/bitmaps_reference/F03_e1_p1')
            }
            else if (is_vrt && ghost_version == 'test') {
                cy.screenshot('/bitmaps_test/F03_e1_p1')
            }
            cy.wait(1000)
            cy.get('.gh-blognav-container > .gh-blognav > .gh-blognav-item > .gh-blognav-line > .gh-blognav-label > .gh-input').first().type(data.label,{force: true})
            cy.get('.gh-blognav-container > .gh-blognav > .gh-blognav-item > .gh-blognav-line > .gh-blognav-url > .gh-input').first().type(data.url,{force: true})
            cy.wait(1000)
            if (is_vrt && ghost_version == 'reference'){
                cy.screenshot('/bitmaps_reference/F03_e1_p2')
            }
            else if (is_vrt && ghost_version == 'test') {
                cy.screenshot('/bitmaps_test/F03_e1_p2')
            }
            cy.wait(1000)
            cy.get('.gh-blognav-container > .gh-blognav > .gh-blognav-item > .gh-blognav-add').first().click({force: true})
            cy.wait(1000)
            if (is_vrt && ghost_version == 'reference'){
                cy.screenshot('/bitmaps_reference/F03_e1_p3')
            }
            else if (is_vrt && ghost_version == 'test') {
                cy.screenshot('/bitmaps_test/F03_e1_p3')
            }
            cy.wait(1000)
            cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
            cy.get('.gh-btn').first().contains('Saved')
            if (is_vrt && ghost_version == 'reference'){
                cy.screenshot('/bitmaps_reference/F03_e1_p4')
            }
            else if (is_vrt && ghost_version == 'test') {
                cy.screenshot('/bitmaps_test/F03_e1_p4')
            }
    
        })

    });

    it('Ajustes en el diseño del blog - escenario 2',function(){
        cy.get('a[href*="#/settings/design/"]').click()
        cy.get('.gh-blognav-container > .gh-blognav > .sortable-objects > .js-draggableObject > .gh-blognav-item > .gh-blognav-delete').first().click({force: true})
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn').first().contains('Saved')
    })

})