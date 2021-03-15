const faker = require('faker');
describe('Ghost', function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
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
            'tagName' : faker.lorem.words()
        });
    };
    dataPool.forEach(function(data, i) {
        // 5 dataPool

    it(`Creación de tags para posts del sitio - escenario 1 - ${i+1}`,function(){
        cy.get('a[href*="#/tags/"]').click()
        cy.get('a[href*="#/tags/new/"]').click()
        cy.get('#tag-name').click({force: true}).type(data.tagName)
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-blue.ember-view').contains('Saved')

    })
});

    it('Creación de tags para posts del sitio - escenario 2',function(){
        cy.get('a[href*="#/tags/"]').click()
        cy.get('a[href*="#/tags/new/"]').click()
        cy.get('#tag-name').click({force: true})
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-red.ember-view').contains('Retry')
    })

    var i, 
    dataPool = [];
    for (i = 1; i <= 5; i++) {
        dataPool.push( {
            'tagDescription' : faker.lorem.sentence()
        });
    };
    dataPool.forEach(function(data, i) {
        // 5 dataPool
    it(`Creación de tags para posts del sitio - escenario 3 - ${i+1}`,function(){
        cy.get('a[href*="#/tags/"]').click()
        cy.get('button').contains('Internal tags').click()
        cy.get('.ember-view.gh-btn.gh-btn-green.gh-btn-lg').contains('Create a new tag').click()
        cy.get('#tag-name').click({force: true}).type('Tag Interna Prueba')
        cy.get('#tag-description').click({force: true}).type(data.tagDescription)
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('button').contains('Saved')
    })

    })

    it('Creación de tags para posts del sitio - escenario 4',function(){
        cy.get('a[href*="#/tags/"]').click()
        cy.get('button').contains('Internal tags').click()
        cy.get('.ember-view.gh-btn.gh-btn-green.gh-btn-lg').contains('Create a new tag').click()
        cy.get('#tag-name').click({force: true}).type('Tag Interna Prueba')
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click()
        cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.gh-btn-blue.ember-view').contains('Saved')
    })
})