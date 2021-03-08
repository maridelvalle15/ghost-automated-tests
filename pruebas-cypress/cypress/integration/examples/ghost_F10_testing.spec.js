describe('Ghost', function () {
    const ghost_url = Cypress.env('GHOST_URL')
    const email = Cypress.env('EMAIL')
    const password = Cypress.env('PASSWORD')
    const ghost_version = Cypress.env('GHOST_VERSION')

    beforeEach(()=>{
        cy.viewport(1280,800)
        cy.visit(ghost_url + '/ghost/#/signin')
        cy.get('#ember8').type(email)
        cy.get('#ember10').type(password)
        cy.get('#ember12 > span').click()
        cy.wait(1000)
    })

    it('Invitación de usuarios para que colaboren en la gestión del sitio - escenario 1',function(){
        cy.get('a[href*="#/staff/"]').click({force: true})
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F10_e1_p1')
        }
        else {
            cy.screenshot('/bitmaps_test/F10_e1_p1')
        }
        cy.get('.gh-btn.gh-btn-green').click()
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F10_e1_p2')
        }
        else {
            cy.screenshot('/bitmaps_test/F10_e1_p2')
        }
        cy.get('#new-user-email').click()
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F10_e1_p3')
        }
        else {
            cy.screenshot('/bitmaps_test/F10_e1_p3')
        }
        cy.get('.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click()
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F10_e1_p4')
        }
        else {
            cy.screenshot('/bitmaps_test/F10_e1_p4')
        }
        cy.get('.response').contains('Please enter an email.')
        if (ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F10_e1_p5')
        }
        else {
            cy.screenshot('/bitmaps_test/F10_e1_p5')
        }
    })

    it('Invitación de usuarios para que colaboren en la gestión del sitio - escenario 2',function(){
        cy.get('a[href*="#/staff/"]').click({force: true})
        cy.get('.gh-btn.gh-btn-green').click()
        cy.get('#new-user-email').type('email_ivalido.com')
        cy.get('.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click()
        cy.get('.response').contains('Invalid Email.')
    })

    it('Invitación de usuarios para que colaboren en la gestión del sitio - escenario 4',function(){
        cy.get('a[href*="#/staff/"]').click({force: true})
        cy.get('.gh-btn.gh-btn-green').click()
        cy.get('#new-user-email').type('pguataquira@gmail.com')
        cy.get('.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click()
    })

    it('Invitación de usuarios para que colaboren en la gestión del sitio - escenario 3',function(){
        cy.get('a[href*="#/staff/"]').click({force: true})
        cy.get('.gh-btn.gh-btn-green').click()
        cy.get('#new-user-email').type('pguataquira@gmail.com')
        cy.get('.gh-btn.gh-btn-green.gh-btn-icon.ember-view').click()
        cy.get('.response').contains('A user with that email address was already invited.')
    })
})