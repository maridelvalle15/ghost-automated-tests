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
        cy.get('.email').type(email)
        cy.get('.password').type(password)
        cy.get('.login').click()
        cy.wait(1000)
    })

    it('Ingresar contraseña actual equivocada (Escenario 1 para F07)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F07_e1_p1')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F07_e1_p1')
        }
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F07_e1_p2')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F07_e1_p2')
        }
        cy.get('#user-password-old').click({force: true}).type('1a1a1a1a1a')
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F07_e1_p3')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F07_e1_p3')
        }
        cy.get('#user-password-new').click({force: true}).type('Mari1234**')
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F07_e1_p4')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F07_e1_p4')
        }
        cy.get('#user-new-password-verification').click({force: true}).type('Mari1234**')
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F07_e1_p5')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F07_e1_p5')
        }
        cy.get('.button-change-password').click()
        cy.wait(1000)
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F07_e1_p6')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F07_e1_p6')
        }
        cy.get('.button-change-password > span').first().contains('Retry')
        if (is_vrt && ghost_version == 'reference'){
            cy.screenshot('/bitmaps_reference/F07_e1_p7')
        }
        else if (is_vrt && ghost_version == 'test') {
            cy.screenshot('/bitmaps_test/F07_e1_p7')
        }
    })

    it('Ingresar verificación de contraseña equivocada (Escenario 2 para F07)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-password-old').click({force: true}).type(password)
        cy.get('#user-password-new').click({force: true}).type('Mari1234**')
        cy.get('#user-new-password-verification').click({force: true}).type('mAri12345*')
        cy.get('.button-change-password').click()
        cy.wait(1000)
        cy.get('.button-change-password > span').first().contains('Retry')
    })

    it('Ingresar verificación de contraseña con campo de contraseña antigua vacio (Escenario 3 para F07)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-password-new').click({force: true}).type('Mari1234**')
        cy.get('#user-new-password-verification').click({force: true}).type('Mari1234**')
        cy.get('.button-change-password').click()
        cy.wait(1000)
        cy.get('.button-change-password > span').first().contains('Retry')
    })

    for (var i = 1; i <= 3; i++) {
        // 3 apriori
        it(`Ingresar campos de nueva contraseña con menos de 10 caracteres - escenario 4 - ${i}`, function() {
            cy.get('.w3.mr1.fill-darkgrey').click()
            cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
            cy.get('#user-password-old').click({force: true}).type(password)
            cy.fixture('passwordDataApriori').then(function (passwordData) {
                let shortPasswordArray = passwordData[0].shortPassword;
                this.randomShortPassword = shortPasswordArray[Math.floor(Math.random()*shortPasswordArray.length)]
                cy.get('#user-password-new').click({force: true}).type(this.randomShortPassword)
                cy.get('#user-new-password-verification').click({force: true}).type(this.randomShortPassword)
                cy.get('.button-change-password').click()
                cy.wait(1000)
                cy.get('.button-change-password > span').first().contains('Retry')
            })
        })
    }

    for (var i = 1; i <= 3; i++) {
        // 3 apriori
        it(`Ingresar campos de nueva contraseña insegura - escenario 5 - ${i}`, function() {
            cy.get('.w3.mr1.fill-darkgrey').click()
            cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
            cy.get('#user-password-old').click({force: true}).type(password)
            cy.fixture('passwordDataApriori').then(function (passwordData) {
                let nonSecurePasswordArray = passwordData[1].nonSecurePassword;
                this.randomnonSecurePassword = nonSecurePasswordArray[Math.floor(Math.random()*nonSecurePasswordArray.length)]
                cy.get('#user-password-new').click({force: true}).type(this.randomnonSecurePassword)
                cy.get('#user-new-password-verification').click({force: true}).type(this.randomnonSecurePassword)
                cy.get('.button-change-password').click()
                cy.wait(1000)
                cy.get('.button-change-password > span').first().contains('Retry')
            })
        })
    }

    for (var i = 1; i <= 4; i++) {
        // 4 apriori
        it(`Ingresar campos de nueva contraseña valida - escenario 6 - ${i}`, function() {
            cy.get('.w3.mr1.fill-darkgrey').click()
            cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
            cy.get('#user-password-old').click({force: true}).type(password)
            cy.fixture('passwordDataApriori').then(function (passwordData) {
                let validPasswordArray = passwordData[2].validPassword;
                this.randomValidPassword = validPasswordArray[Math.floor(Math.random()*validPasswordArray.length)]
                cy.get('#user-password-new').click({force: true}).type(this.randomValidPassword)
                cy.get('#user-new-password-verification').click({force: true}).type(this.randomValidPassword)
                cy.get('.button-change-password').click()
                cy.wait(1000)
                cy.get('.button-change-password > span').first().contains('Saved')

                cy.get('#user-password-old').click({force: true}).type(this.randomValidPassword)
                cy.get('#user-password-new').click({force: true}).type(password)
                cy.get('#user-new-password-verification').click({force: true}).type(password)
                cy.get('.button-change-password').click()
            })
        })
    }

    it('Ingresar contraseña alfanumérica de 10 caracteres (Escenario 7 para F07)', function() {
        cy.get('.w3.mr1.fill-darkgrey').click()
        cy.get('.dropdown-menu.dropdown-triangle-top').contains('Your Profile').click()
        cy.get('#user-password-old').click({force: true}).type(password)
        cy.get('#user-password-new').click({force: true}).type('Mari1234**')
        cy.get('#user-new-password-verification').click({force: true}).type('Mari1234**')
        cy.get('.button-change-password').click()
        cy.wait(1000)
        cy.get('.button-change-password > span').first().contains('Saved')

        cy.get('#user-password-old').click({force: true}).type('Mari1234**')
        cy.get('#user-password-new').click({force: true}).type(password)
        cy.get('#user-new-password-verification').click({force: true}).type(password)
        cy.get('.button-change-password').click()
    })

})