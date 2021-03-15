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

    it('Invitación de usuarios para que colaboren en la gestión del sitio - escenario 1',function(){
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F10_e1_p1')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F10_e1_p1')
        }
        cy.wait(1000)
        cy.get('a[href*="#/staff/"]').first().click({force: true})
        cy.wait(1000)
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F10_e1_p1')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F10_e1_p1')
        }
        cy.wait(1000)
        cy.get('.gh-btn.gh-btn-green').click()
        cy.wait(1000)
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F10_e1_p2')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F10_e1_p2')
        }
        cy.wait(1000)
        cy.get('#new-user-email').click()
        cy.wait(1000)
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F10_e1_p3')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F10_e1_p3')
        }
        cy.wait(1000)
        cy.get('.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click()
        cy.get('.response').contains('Please enter an email.')
        cy.wait(1000)
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F10_e1_p5')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F10_e1_p5')
        }
        cy.wait(1000)
    })

    for (var i = 1; i <= 10; i++) {
        // 10 apriori       
        it(`Invitación de usuarios para que colaboren en la gestión del sitio - escenario 2 - ${i}`,function(){

            cy.get('a[href*="#/staff/"]').first().click({force: true})
            cy.wait(1000)
            cy.get('.gh-btn.gh-btn-green').click()
            cy.fixture('emailDataApriori').then(function (emailData) {
                let emailInvalidlArray = emailData[0].emailInvalid;
                this.randomEmailInvalid = emailInvalidlArray[Math.floor(Math.random()*emailInvalidlArray.length)]
                cy.get('#new-user-email').type(this.randomEmailInvalid)
                cy.get('.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click()
                cy.get('.response').contains('Invalid Email.')
                })
        })
    }

    var i;

    for (i = 1; i <= 10; i++) {
        // 10 escenarios aleatorio
    it(`Invitación de usuarios para que colaboren en la gestión del sitio - escenario 4a - ${i}`,function(){
        cy.get('a[href*="#/staff/"]').first().click({force: true})
        cy.wait(100)
        cy.get('.gh-btn.gh-btn-green').click()
        let randomEmail = faker.internet.email();
        cy.get('#new-user-email').type(randomEmail)
        cy.get('.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click()
        })
    }


    for (var i = 1; i <= 10; i++) {
        // 10 apriori
    it(`Invitación de usuarios para que colaboren en la gestión del sitio - escenario 4b - ${i}`,function(){
        cy.get('a[href*="#/staff/"]').first().click({force: true})
        cy.wait(100)
        cy.get('.gh-btn.gh-btn-green').click()
        cy.fixture('emailDataApriori').then(function (emailDatas) {
            let emailValidlArray = emailDatas[1].emailValid;
            this.randomEmailValid = emailValidlArray[Math.floor(Math.random()*emailValidlArray.length)]
            cy.get('#new-user-email').type(this.randomEmailValid)
            cy.get('.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click()
            })
        })
    }

    for (var i = 1; i <= 5; i++) {
        // 5 apriori
    it(`Invitación de usuarios para que colaboren en la gestión del sitio - escenario 3 - ${i}`,function(){
        cy.get('a[href*="#/staff/"]').first().click({force: true})
        cy.wait(100)
        cy.get('.gh-btn.gh-btn-green').click()
        cy.fixture('emailDataApriori').then(function (emailData) {
            let emailValidlArray = emailData[1].emailValid;
            this.randomEmailValid = emailValidlArray[Math.floor(Math.random()*emailValidlArray.length)]
            cy.get('#new-user-email').type(this.randomEmailValid)
            cy.get('.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click()
            cy.get('.response').contains('A user with that email address was already invited.')
            })
        })
    }
})